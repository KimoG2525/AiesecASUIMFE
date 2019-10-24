import React, { useState } from 'react'
import NavBar from '../../sideComponents/navBar'
import './style.scss'
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import ColorPicker from '../../sideComponents/colorPicker'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import Person from '@material-ui/icons/Person'
const AddEnabler = () => {
const [logo,setLogo] = useState('')
const [backColor,setBackColor] = useState('#52bdf1')

const onDrop = (picture) => {
    setLogo(picture)
    console.log(logo)
}

const handleColorChange = (color) => {
	console.log(color)
  setBackColor(color.hex)
}
    return(
    <div className="main-container">
          <NavBar search={false}/>
          <div className="header">
        <div className="head-label">
        <h1>Add Enabler</h1>
        </div>
        </div>
        <div className="enabler-body">
        <div className="container">
            <div className="images">
            <div className="logo" style={{backgroundColor:`${backColor}`}}>			
           <div className = "image-container">
		   <Person style={{color:'#fff',fontSize:'100px',marginTop:'20px'}}/>
		   </div>
		   <Button style={{height:'25%',backgroundColor:'transparent',marginTop:'115px',borderColor:'transparent'}}  ><AddCircleOutline style={{color:'#fff',fontSize:'30px'}}/> </Button>
            </div>
            <div className="colorPicker">
			<ColorPicker handleColorChange={handleColorChange} />
            </div>
            <div className="profile">
			<TextField
         id="filled-multiline-static"
        label="Company's Info"
		multiline
		rows="6"
        // value={values.multiline}
        // onChange={handleChange('multiline')}
		// className={classes.textField}
		style={{borderRadius:'6px',border:'3px solid #000',width:'70%'}}
        margin="normal"
        variant="filled"
      />
            </div>
            </div>
            <div className="details">
                <div className="header-details">
                <h1>Company Details</h1>
                </div>
            <div className="data">
            <div className="left-column">
            <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-name-input'
			 label='Company Name'
			 type='text'
			 name='companyName'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			 
			/>
            <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-email-input'
			 label='E-mail'
			 type='text'
			 name='email'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
            <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-phone-input'
			 label='Phone'
			 type='text'
			 name='phone'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
            <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-address-input'
			 label='Address'
			 type='text'
			 name='address'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
            </div>
            <div className="right-column">
            <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-industry-input'
			 label='Company Industry'
			 type='text'
			 name='industry'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
             <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-contactName-input'
			 label='Contact Name'
			 type='text'
			 name='contactName'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
             <TextField
		     required
	        //  onChange={handleChange}
		     id='outlined-jobs-input'
			 label='Available Jobs'
			 type='text'
			 name='jobs'
			 margin='normal'
			 variant='outlined'
			 style={{ width: '290px' }}
			/>
            <div className="buttons">
            <Button
					// onClick={onSubmit}
					type='submit'
					variant='primary'
					style={{
						width: '100px',
						
						fontWeight: 'bold'
					}}>
					Add
				</Button>
				<Button
					// onClick={e => props.logout(props.token)}
					variant='primary'
					style={{
						width: '100px',
                        marginLeft:'20px',
						fontWeight: 'bold'
					}}>
					Cancel
				</Button>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    )
}

export default AddEnabler