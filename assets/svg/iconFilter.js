import * as React from "react";
import Svg, { Path } from "react-native-svg";

function IconFilter(props) {
	return (
		<Svg
			width={26}
			height={20}
			viewBox="0 0 26 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M8.937 11.875A4.064 4.064 0 0112.891 15h11.671a.937.937 0 01.128 1.866l-.128.009h-11.67a4.063 4.063 0 01-7.908 0H1.437a.937.937 0 01-.127-1.866L1.437 15h3.547a4.064 4.064 0 013.953-3.125zM17.063 0a4.064 4.064 0 013.953 3.125h3.547a.937.937 0 01.127 1.866L24.562 5h-3.546a4.063 4.063 0 01-7.907 0H1.437a.937.937 0 01-.127-1.866l.127-.009H13.11A4.064 4.064 0 0117.063 0z"
				fill="#A8A8A8"
			/>
		</Svg>
	);
}

export default IconFilter;
