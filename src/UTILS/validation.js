export default validation = (data, emptyFiled = true) => {
	let errorFields = [];
	let reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	for (key in data) {
		if (emptyFiled && !data[key].length) errorFields.push(key);
		if (key === "email" && !reg.test(data.email)) errorFields.push(key);
		if (key === "passwordRepeat" && data.passwordRepeat != data.password)
			errorFields.push(key);
	}

	return {
		hasErrors: errorFields.length > 0 ? true : false,
		errors: errorFields,
	};
};
