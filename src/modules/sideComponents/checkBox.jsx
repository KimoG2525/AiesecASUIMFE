import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = props => {
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={props.checked}
					onChange={props.handleChecked}
					//value={checked}
					color='primary'
				/>
			}
			label='Remember me ?'
		/>
	);
};

export default CheckBox;
