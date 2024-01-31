import React, {
	useState,
	useRef,
	forwardRef,
	useImperativeHandle,
} from "react";
import {
	View,
	Text,
	StyleSheet,
	Animated,
	Dimensions,
	TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import IconClose from "assets/svg/iconClose";
import { sortDataList } from "src/redux/slice/productsDataSlice";
import THEME from "src/THEME";
const SearchBar = ({ sortData, textSearch }) => {
	const lengthMove = Dimensions.get("window").width;
	const positionSearch = useRef(new Animated.Value(-lengthMove)).current;
	const ref = useRef();
	const startShowServices = () => {
		Animated.timing(positionSearch, {
			toValue: 0,
			duration: 500,
			useNativeDriver: false,
		}).start();
	};

	const startCloseServices = () => {
		Animated.timing(positionSearch, {
			toValue: -lengthMove,
			duration: 500,
			useNativeDriver: false,
		}).start(() => sortData(""));
	};

	return (
		<>
			<View style={{ width: "7%" }}>
				<Text onPress={startShowServices}>
					<Feather name="search" size={22} color={THEME.colors.defaultText} />
				</Text>
			</View>
			<Animated.View style={[styles.blockSearch, { right: positionSearch }]}>
				<TextInput
					ref={ref}
					style={styles.search}
					value={textSearch}
					onChangeText={(value) => {
						sortData(value);
					}}
					placeholder="Страна, регион, город..."
					placeholderTextColor="#D3D3D3"
				/>
				<Text onPress={startCloseServices}>
					<IconClose />
				</Text>
			</Animated.View>
		</>
	);
};
const styles = StyleSheet.create({
	blockSearch: {
		justifyContent: "space-between",
		flexDirection: "row",
		backgroundColor: "#fff",
		position: "absolute",
		// right: 0,
		top: 0,
		width: "70%",
		height: "100%",
		paddingVertical: 5,
		paddingHorizontal: 10,
		// borderRadius: 8,
		borderBottomWidth: 0.5,
		borderColor: "gray",
		borderBottomColor: THEME.colors.defaultText,
	},
	search: {
		width: "85%",
		fontFamily: THEME.font.InterMedium,
		color: THEME.colors.defaultText,
	},
});
const mapStateToProps = ({ productsData }) => {
	const { textSearch } = productsData;
	return { textSearch };
};
const mapDispatchToProps = (dispatch) => {
	return {
		sortData: (value) => dispatch(sortDataList(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
