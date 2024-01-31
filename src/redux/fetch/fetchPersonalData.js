import { createAsyncThunk } from "@reduxjs/toolkit";
import LocalData from "src/data-storage/localData";

const localData = new LocalData();

//personal data
export const fetchPersonalData = createAsyncThunk(
	"personal/getPersonalData",
	async (id) => {
		const res = await localData.getPersonalData();

		return res;
	}
);

export const fetchSetPersonalData = createAsyncThunk(
	"personal/setPersonalData",
	async (props) => {
		const res = await localData.setPersonalData(props.id, props.data);

		return res;
	}
);
