import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowBack(props) {
	return (
		<Svg
			width={10}
			height={18}
			viewBox="0 0 10 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M8.288 17.75a1.251 1.251 0 01-.975-.463l-6.038-7.5a1.25 1.25 0 010-1.587L7.525.7A1.252 1.252 0 119.45 2.3L3.863 9l5.4 6.7a1.25 1.25 0 01-.975 2.05z"
				fill="#51D3B7"
			/>
		</Svg>
	);
}

export default ArrowBack;
