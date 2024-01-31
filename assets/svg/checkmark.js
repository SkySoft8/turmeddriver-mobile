import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckMark(props) {
	return (
		<Svg
			width={12}
			height={9}
			viewBox="0 0 12 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M4.167 6.467L9.575 1.06a.87.87 0 01.642-.252c.26 0 .473.084.641.252a.87.87 0 01.252.641.87.87 0 01-.252.642l-6.05 6.05a.88.88 0 01-.641.275.88.88 0 01-.642-.275L1.142 6.01a.87.87 0 01-.252-.642.87.87 0 01.252-.642.87.87 0 01.641-.252.87.87 0 01.642.252l1.742 1.742z"
				fill="#51D3B7"
			/>
		</Svg>
	);
}

export default CheckMark;
