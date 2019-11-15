import React, { useState } from 'react';
import NavBar from '../../sideComponents/navBar';
import './style.scss';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import ColorPicker from '../../sideComponents/colorPicker';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Person from '@material-ui/icons/Person';
import { imageCompress } from '../../../global/functions/imageProcessing';
import { connect } from 'react-redux';
import { insertEnabler } from './state/actions';
const AddEnabler = ({ history, insertEnabler }) => {
	const [logo, setLogo] = useState('');
	const [backColor, setBackColor] = useState('#52bdf1');
	const [show, setShow] = useState(false);
	let fileInput = null;

	const onDrop = picture => {
		if (picture) {
			setLogo(URL.createObjectURL(picture));
			imageCompress(picture);
		}
	};

	const handleColorChange = color => {
		console.log(color);
		setBackColor(color.hex);
	};

	const showColor = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	const popover = {
		position: 'absolute',
		zIndex: '2'
	};
	const cover = {
		position: 'fixed',
		top: '0px',
		right: '0px',
		bottom: '0px',
		left: '0px'
	};

	const RenderImage = () => {
		if (logo) {
			return (
				<img
					src={logo}
					alt='logo'
					style={{ maxWidth: '140px', maxHeight: '140px' }}
				/>
			);
		} else {
			return (
				<Person
					style={{
						color: '#fff',
						fontSize: '120px',
						marginTop: '20px',
						marginLeft: '10px'
					}}
				/>
			);
		}
	};

	return (
		<div className='main-container'>
			<NavBar search={false} />
			<div className='header'>
				<div className='head-label'>
					<h1>Add Enabler</h1>
				</div>
			</div>
			<div className='enabler-body'>
				<div className='container'>
					<div className='images'>
						<div className='logo' style={{ backgroundColor: `${backColor}` }}>
							<div className='image-container'>
								<RenderImage />
							</div>
							<input
								type='file'
								style={{ display: 'none' }}
								onChange={e => onDrop(e.target.files[0])}
								ref={input => (fileInput = input)}
							/>
							<Button
								onClick={() => fileInput.click()}
								style={{
									height: '25%',
									backgroundColor: 'transparent',
									marginTop: '150px',
									borderColor: 'transparent'
								}}>
								<AddCircleOutline style={{ color: '#fff', fontSize: '30px' }} />
							</Button>
						</div>
						<div className='colorPicker'>
							<Button onClick={showColor}>Pick Color</Button>
							{show ? (
								<div style={popover}>
									<div style={cover} onClick={handleClose} />
									<ColorPicker handleColorChange={handleColorChange} />
								</div>
							) : null}
						</div>
						<div className='profile'>
							<TextField
								id='filled-multiline-static'
								label="Company's Info"
								multiline
								rows='6'
								// value={values.multiline}
								// onChange={handleChange('multiline')}
								// className={classes.textField}
								style={{
									borderRadius: '6px',
									width: '70%',
									backgroundColor: '#fff',
									padding: '-5px'
								}}
								margin='normal'
								variant='outlined'
							/>
						</div>
					</div>
					<div className='details'>
						<div className='header-details'>
							<h1>Company Details</h1>
						</div>
						<div className='data'>
							<div className='left-column'>
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
							<div className='right-column'>
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
								<div className='buttons'>
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
										onClick={() => {
											history.push('/dashboard');
										}}
										variant='primary'
										style={{
											width: '100px',
											marginLeft: '20px',
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
	);
};
const mapDispatchToProps = dispatch => {
	return {
		insertEnabler: enabler => dispatch(insertEnabler(enabler))
	};
};
export default connect(null, mapDispatchToProps)(AddEnabler);
