export const viewAge = (date) => {
	if (!date) return "";
	const birthDate = new Date(date);
	const birthDay = birthDate.getDate();
	const birthMonth = birthDate.getMonth() + 1;
	const birthYear = birthDate.getFullYear();

	const nowDay = new Date().getDate();
	const nowMonth = new Date().getMonth() + 1;
	const nowYear = new Date().getFullYear();

	const nowAge = () => {
		if (birthMonth - nowMonth < 0) {
			return nowYear - birthYear;
		} else if (birthMonth - nowMonth > 0) {
			return nowYear - birthYear - 1;
		} else if (birthMonth - nowMonth === 0) {
			if (birthDay - nowDay < 0) {
				return nowYear - birthYear;
			} else {
				return nowYear - birthYear - 1;
			}
		}
	};
	return nowAge();
};
