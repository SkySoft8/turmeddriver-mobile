import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconRemove(props) {
	return (
		<Svg
			width={24}
			height={26}
			viewBox="0 0 24 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M22.313 4.625h-4.688v-.938A2.824 2.824 0 0014.812.876H9.189a2.824 2.824 0 00-2.813 2.813v.937H1.687a.937.937 0 100 1.875h.938v16.875A1.875 1.875 0 004.5 25.25h15a1.875 1.875 0 001.875-1.875V6.5h.938a.937.937 0 000-1.875zM10.124 18.688a.938.938 0 01-1.875 0v-7.5a.937.937 0 011.875 0v7.5zm5.625 0a.938.938 0 01-1.875 0v-7.5a.938.938 0 011.875 0v7.5zm0-14.063h-7.5v-.938a.937.937 0 01.938-.937h5.624a.937.937 0 01.938.938v.937z"
				fill="#A8A8A8"
			/>
		</Svg>
	);
}

export default IconRemove;
