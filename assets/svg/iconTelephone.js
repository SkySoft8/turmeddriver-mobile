import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconTelephone(props) {
	return (
		<Svg
			width={15}
			height={15}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M14.38 11.102l-1.498-1.498a2.117 2.117 0 00-3.572 1.083c-2.47-.462-4.872-2.854-5.022-4.992a2.118 2.118 0 001.108-3.577L3.9.62a2.118 2.118 0 00-2.995 0C-3.588 5.112 9.888 18.588 14.38 14.096a2.118 2.118 0 000-2.994z"
				fill="#A8A8A8"
			/>
		</Svg>
	);
}

export default IconTelephone;
