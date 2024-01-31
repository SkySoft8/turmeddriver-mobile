import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconArrowCart(props) {
	return (
		<Svg
			width={19}
			height={10}
			viewBox="0 0 19 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M18.25 1.713a1.251 1.251 0 01-.462.975l-7.5 6.037a1.25 1.25 0 01-1.588 0l-7.5-6.25A1.252 1.252 0 112.8.55l6.7 5.588 6.7-5.4a1.25 1.25 0 012.05.975z"
				fill="#D9D9D9"
			/>
		</Svg>
	);
}

export default IconArrowCart;
