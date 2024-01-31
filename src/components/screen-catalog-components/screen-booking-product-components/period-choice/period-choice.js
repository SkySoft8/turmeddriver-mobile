import React, { useState } from "react";

import { dateVisible } from "src/UTILS";
import PeriodChoiceVisible from "./period-choice-visible";
const PeriodChoice = ({
	keyValue,
	changePeriod,
	initValue,
	periodStart = null,
}) => {
	let minimumDay = periodStart
		? periodStart.toString().length > 0
			? new Date(periodStart)
			: null
		: null;

	let initState = new Date();

	if (initValue.toString().length > 1) {
		initState = initValue;
	}

	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;

		const newDate = dateVisible(currentDate);
		changePeriod(keyValue, currentDate, newDate);
		setShow(false);
	};

	const showDatepicker = () => {
		setShow(true);
	};
	return (
		<PeriodChoiceVisible
			date={initState}
			minimumDay={minimumDay}
			show={show}
			initValueLength={initValue.toString().length}
			showDatepicker={showDatepicker}
			onChangeDate={onChange}
		/>
	);
};

export default PeriodChoice;
