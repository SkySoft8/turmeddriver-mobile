import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconProfile(props) {
	return (
		<Svg
			width={51}
			height={50}
			viewBox="0 0 51 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M25.5 28.906c5.61 0 10.156-4.547 10.156-10.156 0-5.61-4.547-10.156-10.156-10.156-5.61 0-10.156 4.547-10.156 10.156 0 5.61 4.547 10.156 10.156 10.156zM9.094 44.531c0-7.812 6.25-15.625 16.406-15.625 10.156 0 16.406 7.813 16.406 15.625"
				stroke="#D9D9D9"
				strokeWidth={3}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default IconProfile;
