import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconPencil(props) {
	return (
		<Svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M21.125 8.156l-5.313-5.25 1.75-1.75c.48-.479 1.068-.718 1.767-.718.697 0 1.286.24 1.765.718l1.75 1.75c.479.48.729 1.058.75 1.735a2.258 2.258 0 01-.688 1.734l-1.781 1.781zM19.312 10L6.063 23.25H.75v-5.313L14 4.688 19.313 10z"
				fill={props.colorEdit}
			/>
		</Svg>
	);
}

export default IconPencil;
