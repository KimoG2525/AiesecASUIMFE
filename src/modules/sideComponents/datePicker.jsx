import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

const DatePickers = (props) => {

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				format='MM/dd/yyyy'
				margin='normal'
				id='date-picker-inline'
				label='Birth Date'
				style={{ marginRight: '200px',width: '240px' , marginTop: '0px' }}
				value={props.birthDate}
				onChange={props.handleDateChange}
				variant='outlined'
				KeyboardButtonProps={{
					'aria-label': 'change date'
				}}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePickers;