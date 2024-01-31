import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TitleBlock from "./../title-block/index";
import THEME from "src/THEME";
const PriceServices = ({
	title = "Услуги",
	cartCategory,
	cartItemCategory,
}) => {
	return (
		<View style={styles.container}>
			<TitleBlock title={title} />

			{cartCategory.map((cart, index) => {
				return (
					<View
						key={cart.id}
						style={[
							styles.blockServices,
							index == 0 ? styles.firstBlockServices : "",
						]}
					>
						<Text style={styles.titleBlockServices}>{cart.title}</Text>
						{cartItemCategory.map((cartItem) => {
							if (cartItem.todo_list_id === cart.id)
								return (
									<View key={cartItem.id} style={styles.rowService}>
										<Text style={styles.serviceText}>{cartItem.title}</Text>
										<Text numberOfLines={1} style={styles.servicePrice}>
											{cartItem.price.replace("р", "")}p
										</Text>
									</View>
								);
						})}
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		marginTop: 25,
		paddingHorizontal: THEME.paddingHorizontal,
	},
	blockServices: {
		marginTop: 20,
	},
	firstBlockServices: {
		marginTop: 15,
	},
	titleBlockServices: {
		color: THEME.colors.green,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
	// variantServices: {
	// 	marginTop: 10,
	// },
	// variantServicesTitle: {
	// 	color: THEME.colors.defaultText,
	// 	fontFamily: THEME.font.InterBold,
	// 	fontSize: 14,
	// 	marginBottom: 3,
	// },
	rowService: {
		marginTop: 5,

		flexDirection: "row",
		justifyContent: "space-between",
	},
	serviceText: {
		width: "84%",
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterMedium,
		fontSize: 14,
	},
	servicePrice: {
		textAlign: "right",
		width: "18%",
		color: THEME.colors.defaultText,
		fontFamily: THEME.font.InterBold,
		fontSize: 14,
	},
});
export default PriceServices;

// oldComponent = () => {
// 	return (
// 		<View style={styles.container}>
// 			<TitleBlock title={"Процедуры и обследования"} />
// 			<View style={[styles.blockServices, styles.firstBlockServices]}>
// 				<Text style={styles.titleBlockServices}>Медицинские услуги</Text>
// 				<View style={[styles.variantServices, { marginTop: 0 }]}>
// 					<Text style={styles.variantServicesTitle}>Обертывания</Text>
// 					<View style={styles.rowService}>
// 						<Text style={styles.serviceText}>Обертывание для тела</Text>
// 						<Text style={styles.servicePrice}>900p</Text>
// 					</View>
// 					<View style={styles.rowService}>
// 						<Text style={styles.serviceText}>Косметические обертывания</Text>
// 						<Text style={styles.servicePrice}>1200p</Text>
// 					</View>
// 				</View>
// 				<View style={styles.variantServices}>
// 					<Text style={styles.variantServicesTitle}>Ванны</Text>
// 					<View style={styles.rowService}>
// 						<Text style={styles.serviceText}>Ванна вихревая, вибрационная</Text>
// 						<Text style={styles.servicePrice}>900p</Text>
// 					</View>
// 					<View style={styles.rowService}>
// 						<Text style={styles.serviceText}>
// 							Массаж верхней конечности, надплечья и области лопатки
// 						</Text>
// 						<Text style={styles.servicePrice}>1200p</Text>
// 					</View>
// 				</View>
// 			</View>

// 			<View style={styles.blockServices}>
// 				<Text style={styles.titleBlockServices}>
// 					Функциональная диагностика
// 				</Text>
// 				<View style={[styles.rowService, { marginTop: 0 }]}>
// 					<Text style={styles.serviceText}>Денситометрия</Text>
// 					<Text style={styles.servicePrice}>1500p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>Динамометрия</Text>
// 					<Text style={styles.servicePrice}>3000p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>Мониторинг по Холтеру</Text>
// 					<Text style={styles.servicePrice}>1900p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>
// 						Ультразвуковая диагностика (УЗИ)
// 					</Text>
// 					<Text style={styles.servicePrice}>1200p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>Ультразвуковая доплерография</Text>
// 					<Text style={styles.servicePrice}>1200p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>Электрокардиография (ЭКГ)</Text>
// 					<Text style={styles.servicePrice}>1200p</Text>
// 				</View>
// 				<View style={styles.rowService}>
// 					<Text style={styles.serviceText}>Эхокардиография</Text>
// 					<Text style={styles.servicePrice}>1200p</Text>
// 				</View>
// 			</View>
// 		</View>
// 	);
// };
