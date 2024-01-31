import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconGeo(props) {
	return (
		<Svg
			width={14}
			height={20}
			viewBox="0 0 14 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M7 9.542A2.292 2.292 0 117 4.96a2.292 2.292 0 010 4.583zM7 .834A6.417 6.417 0 00.583 7.251C.583 12.063 7 19.167 7 19.167s6.417-7.104 6.417-11.916A6.417 6.417 0 007 .834z"
				fill="#A8A8A8"
			/>
		</Svg>
	);
}

export default IconGeo;
