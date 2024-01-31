import React, { useState } from "react";

import THEME from "src/THEME";

import {
	fetchSetCommentProduct,
	fetchGetCommentsProduct,
} from "src/redux/fetch/fetchProductsData";
import { connect } from "react-redux";
import CreateCommentVisible from "./create-comment-visible";
const CreateComment = ({
	id,
	keyItemType,
	fetchSetComment,
	fetchComments,
	activeUser,
}) => {
	const initPlaceHolder = {
		text: "",
		styles: {
			textAlign: "left",
			textAlignVertical: "top",
			color: THEME.colors.defaultText,
		},
	};
	const [value, setValue] = useState("");
	const [placeholder, setPlaceholder] = useState(initPlaceHolder);
	const changeValue = (value) => {
		setValue(value);
	};
	const sentCommit = () => {
		if (value.length < 1) {
			setPlaceholder({
				text: "Поле не может быть пустым!",
				styles: {
					textAlign: "center",
					textAlignVertical: "center",
					color: "red",
				},
			});
			setTimeout(() => {
				setPlaceholder(initPlaceHolder);
			}, 3000);
			return;
		}

		fetchSetComment(id, keyItemType, {
			message: value,
			user_name: activeUser.id,
		});

		setPlaceholder({
			text: "Спасибо за оставленный отзыв!",
			styles: {
				textAlign: "center",
				textAlignVertical: "center",
				color: THEME.colors.green,
			},
		});
		fetchComments(id, keyItemType, 1);
		setTimeout(() => {
			setPlaceholder(initPlaceHolder);
		}, 3000);
		setValue("");
	};
	return (
		<CreateCommentVisible
			changeValue={changeValue}
			sentCommit={sentCommit}
			placeholder={placeholder}
			value={value}
		/>
	);
};

const mapStateToProps = ({ productComment, productsData, usersData }) => {
	const { loading } = productComment;
	const { keyItem: keyItemType } = productsData.productsType;
	const { activeUser } = usersData;
	return { loading, keyItemType, activeUser };
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSetComment: (id, keyType, comment) =>
			dispatch(fetchSetCommentProduct({ id, keyType, comment })),
		fetchComments: (id, keyItemType, page) =>
			dispatch(fetchGetCommentsProduct({ id, keyItemType, page })),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
