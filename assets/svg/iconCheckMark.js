import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconCheckMark(props) {
	return (
		<Svg
			width={19}
			height={15}
			viewBox="0 0 19 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M2 4.857L5 12 17 2"
				stroke="#51D3B7"
				strokeWidth={3}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

export default IconCheckMark;
