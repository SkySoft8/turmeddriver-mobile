import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { validation } from "src/UTILS";
import { fetchSetUserData } from "src/redux/fetch/fetchUser";
import LoadingSpinner from "src/components/loading-spinner";
import EditPersonalData from "../edit-personal-data";
const GetEditPersonalData = ({
	setUserData,
	personalDataList,
	changeAccess,
}) => {
	const [dataForm, setDataForm] = useState({
		data: { ...personalDataList },
		error: [],
	});

	const setData = (keyData, value) => {
		setDataForm((prev) => ({
			...prev,
			data: {
				...dataForm.data,
				[keyData]: value,
			},
		}));
	};
	const sentForm = (data) => {
		const changeState = () => {
			setDataForm((prev) => ({
				...prev,
				error: validation(data, false).errors,
			}));
		};
		if (validation(data, false).hasErrors) {
			changeState();
			return;
		}
		changeState();
		setUserData({ user_id: personalDataList.id, personalData: data });
		setTimeout(() => {
			changeAccess();
		}, 1000);
		// setUserData({ user_id: personalDataList.id, personalData: data }).then(() =>
		//
		// );
	};

	return (
		<EditPersonalData
			dataForm={dataForm}
			setData={setData}
			sentForm={sentForm}
		/>
	);
};

const mapStateToProps = ({ usersData }) => {
	const { activeUser: personalDataList, usersList, loading } = usersData;
	return { personalDataList, loading };
};
const mapDispatchToProps = (dispatch) => {
	return {
		setUserData: (data) => dispatch(fetchSetUserData(data)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GetEditPersonalData);
