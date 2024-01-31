import React, {
	useState,
	useEffect,
	useImperativeHandle,
	forwardRef,
} from "react";

import PeriodVisible from "./period-visible";
const Period = ({ haveRoomData, productsType }, ref) => {
	const [period, setPeriod] = useState({
		periodStart: {
			value: "",
			visible: "",
		},
		periodEnd: { value: "", visible: "" },
		countDay: null,
	});

	useEffect(() => {
		if (
			period.periodStart.visible.length > 0 &&
			period.periodEnd.visible.length > 0
		) {
			if (
				productsType.keyItem == "sanatorium" ||
				productsType.keyItem == "hostel" ||
				productsType.keyItem == "sport"
			) {
				const dayStart = new Date(period.periodStart.value);
				const dayEnd = new Date(period.periodEnd.value);
				const timeDiff = Math.abs(dayEnd.getTime() - dayStart.getTime());
				const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
				setPeriod((prev) => ({ ...prev, countDay: dayDiff }));
			}
		}
	}, [period.periodStart, period.periodEnd]);

	const changePeriod = (key, value, visible) => {
		//if not set periodStart, periodEnd must not use
		if (key === "periodEnd" && period.periodStart.value.length == 0) {
			return;
		} else setPeriod({ ...period, [key]: { visible, value } });
	};

	const returnPeriodState = () => {
		if (period.periodStart.value.length < 1) return null;
		return period;
	};
	useImperativeHandle(ref, () => ({ returnPeriodState }));

	return (
		<PeriodVisible
			haveRoomData={haveRoomData}
			changePeriod={changePeriod}
			periodStart={period.periodStart.value}
			periodEnd={period.periodEnd.value}
			countDay={period.countDay}
		/>
	);
};

export default forwardRef(Period);
