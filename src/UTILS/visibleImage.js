import React, { useEffect, useState } from "react";
import { Image } from "react-native";
const VisibleImage = ({ style, source }) => {
	const [src, setSrc] = useState({ uri: source });
	useEffect(() => {
		setSrc((prev) => ({ uri: source }));
	}, [source]);
	const defaultImg = { img: require("../../assets/images/group.png") };

	return (
		<Image
			style={style}
			source={src}
			onLoad={({
				nativeEvent: {
					source: { width, height },
				},
			}) => (width == 1 && height == 1 ? setSrc(defaultImg.img) : "")}
		/>
	);
};

export default VisibleImage;
