import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconClose(props) {
	const { color = "#A8A8A8" } = props;
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M9.989 8l5.566-5.566A1.407 1.407 0 1013.566.442L8 6.008 2.434.442A1.409 1.409 0 10.44 2.434L6.008 8 .44 13.567a1.409 1.409 0 001.993 1.992L8 9.993l5.566 5.566a1.409 1.409 0 101.993-1.992L9.989 8z"
				fill={color}
			/>
		</Svg>
	);
}

export default IconClose;
