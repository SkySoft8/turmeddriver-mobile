import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleBlock from "../title-block";
import THEME from "src/THEME";

import LoadingSpinner from "src/components/loading-spinner";
const CommentList = ({
	commentList,
	usersList,
	changePageComments,
	pages,
	current_page,
	loading,
}) => {
	if (commentList.length == 0) {
		return <View style={{ marginTop: 25 }} />;
	}

	const pagesArray = new Array(pages).fill(0);

	const getUserName = (id_name) => {
		const user = usersList.find((user) => user.id == id_name);

		if (user) return user.name;
		else "Пользователь";
	};

	return (
		<View style={styles.container}>
			<TitleBlock title={"Отзывы"} />
			{loading && <LoadingSpinner />}
			<View style={styles.blockReviews}>
				{commentList.map((comment, ind) => {
					return (
						<View
							key={comment.id}
							style={[styles.reviewItem, ind == 0 ? { marginTop: 0 } : ""]}
						>
							<Text style={styles.reviewName}>
								{getUserName(comment.user_name)}
							</Text>
							<Text style={styles.reviewText}>{comment.message}</Text>
						</View>
					);
				})}
			</View>

			{pages > 1 ? (
				<View style={[styles.blockPagination]}>
					{pagesArray.map((pag, index) => {
						return (
							<Text
								key={index}
								onPress={() => changePageComments(index + 1)}
								style={[
									styles.itemPagination,
									index + 1 == current_page ? styles.itemPaginationActive : "",
								]}
							>
								{index + 1}
							</Text>
						);
					})}
				</View>
			) : null}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		paddingHorizontal: THEME.paddingHorizontal,
		marginTop: 25,
	},
	blockReviews: { marginTop: 15 },
	reviewItem: {
		marginTop: 10,
	},
	reviewName: {
		fontFamily: THEME.font.InterBold,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	reviewText: {
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
		fontSize: 14,
	},
	blockPagination: {
		marginTop: 10,
		flexDirection: "row",
	},
	itemPagination: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "transparent",
		//
		color: THEME.colors.title,
		fontSize: 14,
		fontFamily: THEME.font.InterBold,
	},
	itemPaginationActive: {
		borderColor: THEME.colors.green,
	},
});
export default CommentList;
