import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconCart(props) {
	return (
		<Svg
			width={43}
			height={42}
			viewBox="0 0 43 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M13.125 33.5a3.125 3.125 0 110 6.25 3.125 3.125 0 010-6.25zm18.75 0a3.125 3.125 0 110 6.25 3.125 3.125 0 010-6.25z"
				stroke="#D9D9D9"
				strokeWidth={3}
			/>
			<Path
				d="M21.458 22.042l6.25-6.25m0 6.25l-6.25-6.25M1.667 2.25l.544.192c2.712.952 4.068 1.429 4.843 2.564.775 1.136.775 2.642.775 5.656v5.671c0 6.13.131 8.15 1.938 10.055 1.804 1.904 4.708 1.904 10.52 1.904H22.5m8.833 0c3.253 0 4.88 0 6.03-.938 1.148-.937 1.477-2.529 2.133-5.714l1.042-5.05c.723-3.625 1.083-5.436.158-6.638-.923-1.202-4.083-1.202-7.594-1.202H20.467m-12.638 0h4.254"
				stroke="#D9D9D9"
				strokeWidth={3}
				strokeLinecap="round"
			/>
		</Svg>
	);
}

export default IconCart;
