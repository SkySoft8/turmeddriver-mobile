export const filterData = (obj, user_id) => {
	const filter = obj.filter((el) => el.user_id == user_id);
	return filter;
};

export const filterItemCategory = (category, itemCategory, type) => {
	let newItemCategory = [];
	category.map((cat) => {
		itemCategory.map((cartItem) => {
			if (cartItem[type] === cat.id) {
				newItemCategory.push({ ...cartItem, todo_list_id: cartItem[type] });
			}
		});
	});

	return newItemCategory;
};
