import React from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
const PhoneNumber = ({handlePhoneChange , width}) => 
{


    return (
        <MuiPhoneNumber
        required
        variant='outlined'
        className='phone-number'
        defaultCountry={'eg'}
        onChange={handlePhoneChange}
        name='mobileNumber'
        label='Phone Number'
        InputProps={{
            style: {
                width:width
            }
        }}
        />
    )
}

export default PhoneNumber