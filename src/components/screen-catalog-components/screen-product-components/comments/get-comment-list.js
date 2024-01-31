import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import CommentList from "./comment-list";
import { fetchGetCommentsProduct } from "src/redux/fetch/fetchProductsData";
const GetCommentList = ({
	id,
	keyItemType,
	fetchComments,
	commentList,
	pages,
	current_page,
	usersList,
	loading,
}) => {
	useEffect(() => {
		fetchComments(id, keyItemType, 1);
	}, []);

	const changePageComments = useCallback(
		(page) => {
			if (page != current_page) {
				fetchComments(id, keyItemType, page);
			}
		},
		[current_page]
	);

	return (
		<CommentList
			commentList={commentList}
			usersList={usersList}
			changePageComments={changePageComments}
			pages={pages}
			current_page={current_page}
			loading={loading}
		/>
	);
};

const mapStateToProps = ({ productComment, usersData, productsData }) => {
	const { commentList, pages, current_page, loading } = productComment;
	const { usersList } = usersData;
	const { keyItem: keyItemType } = productsData.productsType;
	return { commentList, pages, current_page, loading, usersList, keyItemType };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchComments: (id, keyItemType, page) =>
			dispatch(fetchGetCommentsProduct({ id, keyItemType, page })),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(GetCommentList);
