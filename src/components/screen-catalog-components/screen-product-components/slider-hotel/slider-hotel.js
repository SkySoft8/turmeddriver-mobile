import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import ArrowSlider from "assets/svg/arrowSlider";

const SliderHotel = ({ images }) => {
	const [slidePos, setSlidePos] = useState(0);

	return (
		<View style={styles.sliderHotel}>
			<SliderBox
				parentWidth={
					Dimensions.get("screen").width - THEME.paddingHorizontal * 2
				}
				style={{ width: "100%", height: "100%" }}
				images={images}
				dotStyle={{ display: "none" }}
				firstItem={slidePos}
				currentImageEmitter={(current) => setSlidePos(current)}
			/>
			<View style={styles.wrapBlockArrow}>
				<View style={styles.blockArrow}>
					<Pressable
						onPress={() => {
							slidePos != images.length - 1 ? setSlidePos(slidePos + 1) : "";
						}}
						style={[
							styles.arrowSlider,
							styles.arrowSliderLeft,
							{ opacity: slidePos == images.length - 1 ? 0 : 1 },
						]}
					>
						<ArrowSlider />
					</Pressable>
					<Pressable
						onPress={() => {
							slidePos != 0 ? setSlidePos(slidePos - 1) : "";
						}}
						style={[
							styles.arrowSlider,
							styles.arrowSliderRight,
							{ opacity: slidePos == 0 ? 0 : 1 },
						]}
					>
						<ArrowSlider />
					</Pressable>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	sliderHotel: {
		height: 214,
		position: "relative",
	},

	wrapBlockArrow: {
		position: "absolute",
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		top: "45%",

		left: 0,
	},
	blockArrow: {
		width: "90%",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	arrowSliderRight: {
		transform: [{ rotate: "180deg" }],
		right: 0,
	},
});
export default SliderHotel;
