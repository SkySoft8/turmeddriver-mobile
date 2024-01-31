import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconPlus(props) {
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
				d="M8 1.584v12.833M1.583 8.001h12.834"
				stroke="#51D3B7"
				strokeWidth={1.83333}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default IconPlus;
