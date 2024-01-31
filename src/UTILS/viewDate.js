const viewDate = (day = 0, month = 0, year = 0, Date = null) => {
	if (Date) {
		const day = Date.getDate();
		const mount = Date.getMonth() + 1;
		const year = Date.getFullYear();

		return viewDate(day, mount, year, null);
	}
	const date = `${day < 10 ? "0" : ""}${day}.${
		month < 10 ? "0" : ""
	}${month}.${year}`;
	return date;
};
const viewTime = (Date = null) => {
	if (Date) {
		const minutes =
			Date.getMinutes() < 10 ? `0${Date.getMinutes()}` : Date.getMinutes();
		const hours =
			Date.getHours() < 10 ? `0${Date.getHours()}` : Date.getHours();

		return `${hours}:${minutes}`;
	}
};

const dateVisible = (date = []) => {
	if (date.toString().length > 1) {
		const dateSet = new Date(date);
		return `${viewDate(
			dateSet.getDate(),
			dateSet.getMonth() + 1,
			dateSet.getFullYear()
		)} `;
	} else return "";
};

export { viewDate, dateVisible, viewTime };
