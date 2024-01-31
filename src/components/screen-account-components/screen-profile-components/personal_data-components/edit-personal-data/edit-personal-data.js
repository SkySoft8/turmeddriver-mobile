import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { CreateInput, CreateButton } from "src/UTILS";

import ChoiceGender from "../choice-gender";
import ChoiceDate from "../choice-date";

const EditPersonalData = ({ dataForm, setData, sentForm }) => {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<View style={[styles.row, { marginTop: 0 }]}>
					<CreateInput
						title={"Фамилия"}
						keyData={"surname"}
						type={"default"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.surname}
					/>
				</View>
				<View style={styles.row}>
					<CreateInput
						title={"Имя"}
						keyData={"name"}
						type={"default"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.name}
					/>
				</View>
				<View style={styles.row}>
					<CreateInput
						title={"Email"}
						keyData={"email"}
						type={"email-address"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.email}
						change={false}
					/>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Пол</Text>
					<ChoiceGender setData={setData} initValue={dataForm.data.gender} />
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Возраст</Text>
					<ChoiceDate setData={setData} initValue={dataForm.data.age} />
				</View>
				<View style={styles.row}>
					<CreateInput
						title={"Телефон"}
						keyData={"phone"}
						type={"numeric"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.phone}
					/>
				</View>
				<View style={styles.row}>
					<CreateInput
						title={"Страна"}
						keyData={"user_district"}
						type={"default"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.user_district}
					/>
				</View>
				<View style={styles.row}>
					<CreateInput
						title={"Город"}
						keyData={"user_city"}
						type={"default"}
						setData={setData}
						error={dataForm.error}
						initValue={dataForm.data.user_city}
					/>
				</View>

				<Pressable
					style={styles.btnForm}
					onPress={() => sentForm(dataForm.data)}
				>
					<CreateButton text={"Сохранить изменения"} />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { alignContent: "center", marginTop: 20 },
	form: { width: "100%" },
	row: { marginTop: 8, width: "100%" },
	rowTitle: {
		color: THEME.colors.defaultText,

		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
	btnForm: {
		marginTop: 20,
	},
});

export default EditPersonalData;
