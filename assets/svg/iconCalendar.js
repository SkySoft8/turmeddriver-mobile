import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconCalendar(props) {
	return (
		<Svg
			width={22}
			height={22}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M2.357 3.928A1.571 1.571 0 00.786 5.499v14.143a1.571 1.571 0 001.571 1.572h17.286a1.571 1.571 0 001.571-1.572V5.5a1.571 1.571 0 00-1.571-1.571H16.5M5.5.785v6.286m11-6.286v6.286m-11-3.143h7.857"
				stroke="#A8A8A8"
				strokeWidth={1.57143}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M5.5 12.571a.786.786 0 100-1.57.786.786 0 000 1.57zM11 12.571a.786.786 0 100-1.57.786.786 0 000 1.57zM16.5 12.571a.786.786 0 100-1.57.786.786 0 000 1.57zM5.5 17.284a.786.786 0 100-1.571.786.786 0 000 1.571z"
				stroke="#A8A8A8"
				strokeWidth={1.57143}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default IconCalendar;
