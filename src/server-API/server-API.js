import axios from "axios";
export default class ServerAPI {
	_api_url_public = "https://tourmeddriver.com/public/api";
	_api_url = "https://tourmeddriver.com/api";

	//get All users
	getUsersData = async () => {
		const res = await axios.get(`${this._api_url_public}/users`);
		return res.data.data;
	};

	setUserData = async (user_id, personalData) => {
		const {
			surname,
			name,
			email,
			gender,
			age,
			phone,
			user_district,
			user_city,
		} = personalData;
		const obj = {
			name,
			surname,
			age,
			gender,
			user_city,
			user_district,
			phone,
		};

		const res = await axios
			.patch(`${this._api_url}/upName/${user_id}`, obj)
			.then((res) => {
				return personalData;
			});

		return res;
	};

	userRegistration = async (newUser) => {
		const { email, name, password } = newUser.data;
		const obj = {
			email: email,
			name: name,
			password: password,
		};

		const res = await axios
			.post(`${this._api_url}/newUser`, obj)
			.then((res) => res);

		return res.data.data;
	};
	//Personal data

	//Products Data (here fetch api for List,preferences,category,category Item,services)
	getProductsData = async (objType) => {
		const fetchAllData = async () => {
			let data = {};
			for (key in objType) {
				if (key === "key") {
					data = {
						...data,
						productsDataList: await axios
							.post(`${this._api_url_public}/${objType[key]}`, {})
							.then((res) => res.data.data)
							.catch((error) => console.log(error.response)),
					};
				} else {
					data[key] = await axios
						.get(`${this._api_url_public}/${objType[key]}`, {})
						.then((res) => res.data.data)
						.catch((error) => console.log(error.response));
				}
			}
			return data;
		};

		return await fetchAllData();
	};

	getItemProduct = async (id, keyItemType) => {
		const res = await axios.get(`${this._api_url_public}/${keyItemType}/${id}`);

		return res.data.data;
	};

	// get comments

	getComments = async (id, keyItemType, page = 1) => {
		let res;
		if (keyItemType === "medicals") {
			res = await axios.post(`${this._api_url_public}/show/${id}/comments`, {
				page: page,
			});
		} else if (keyItemType === "spa") {
			res = await axios.post(
				`${this._api_url_public}/spa/show/${id}/comments`,
				{
					page: page,
				}
			);
		} else if (keyItemType === "hostel") {
			res = await axios.post(
				`${this._api_url_public}/hostelShow/${id}/comments`,
				{
					page: page,
				}
			);
		} else if (keyItemType === "sanatorium") {
			res = await axios.post(
				`${this._api_url_public}/sanatoriumShow/${id}/comments`,
				{
					page: page,
				}
			);
		} else if (keyItemType === "tur") {
			res = await axios.post(`${this._api_url_public}/turShow/${id}/comments`, {
				page: page,
			});
		} else if (keyItemType === "sport") {
			res = await axios.post(
				`${this._api_url_public}/sportShow/${id}/comments`,
				{
					page: page,
				}
			);
		} else if (keyItemType === "cafe") {
			res = await axios.post(
				`${this._api_url_public}/cafe/show/${id}/comments`,
				{
					page: page,
				}
			);
		}

		return res.data;
	};

	setComment = async (id, keyItemType, { message, user_name }) => {
		const type = keyItemType != "medicals" ? keyItemType : "medical";
		const comment = {
			message: message,
			user_name: `${user_name}`,
			[`${type}Card_id`]: id,
		};

		const res = await axios.post(
			`${this._api_url}/${keyItemType}/${id}/comments`,
			comment
		);

		return res;
	};

	//get hotel rooms

	getRooms = async (keyRooms) => {
		const res = await axios.get(`${this._api_url_public}/${keyRooms}`);

		return res.data.data;
	};

	///Cart
	getCart = async () => {
		const res = await axios.get(`${this._api_url}/orders`);
		return res.data.data;
	};

	setToCart = async (product) => {
		await axios.post(`${this._api_url}/preOrder`, product);
		return product;
		// return res.data.data;
	};

	removeFromCart = async (products) => {
		const res = await Promise.all(
			products.map(async ({ id }) => {
				await axios.delete(`${this._api_url}/preOrder/${id}`);
			})
		);

		return res;
	};

	/////Payment

	getPaymentsData = async () => {
		const res = await axios.get(`${this._api_url}/payments`);

		return res.data.data;
	};
	//sent
	cartPayment = async (user_id) => {
		const res = await axios
			.get(`${this._api_url}/payment/${user_id}`)
			.then((res) => res.data);

		return res;
	};
}
