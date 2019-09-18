import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

const DatePickers = () => {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2014-08-18T21:11:54')
	);

	function handleDateChange(date) {
		setSelectedDate(date);
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				format='MM/dd/yyyy'
				margin='normal'
				id='date-picker-inline'
				label='Birth Date'
				style={{ marginLeft: '0px', marginRight: '330px', marginTop: '0px' }}
				value={selectedDate}
				onChange={handleDateChange}
				variant='outlined'
				KeyboardButtonProps={{
					'aria-label': 'change date'
				}}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePickers;

// import 'date-fns';
// import React, { useState } from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

// const DatePickers = () => {
// 	const [selectedDate, setSelectedDate] = useState(
// 		new Date('2014-08-18T21:11:54')
// 	);

// 	function handleDateChange(date) {
// 		setSelectedDate(date);
// 	}

// 	return (
// 		<MuiPickersUtilsProvider utils={DateFnsUtils}>
// 			<DatePicker value={selectedDate} onChange={handleDateChange} placeholder="Birth Date" variant='outlined' label="Birth Date" />
// 		</MuiPickersUtilsProvider>
// 	);
// };
// export default DatePickers;
