import React, { useState, useEffect } from 'react';
import './style.scss';
import MixImg from '../../../assets/images/mix.png';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateUser } from '../../../HelperFunctions/validation';
import { save, logout } from './state/actions';
import MuiPhoneNumber from 'material-ui-phone-number';
import DatePickers from './../../sideComponents/datePicker';
const Form = props => {
	const [userData, setUserData] = useState({
		firstName: '',
		lastName: '',
		mobileNumber: '',
		nickName: '',
		birthDate: new Date(),
		password: ''
	});

	const handleChange = event => {
		setUserData({...userData, [event.target.name]: event.target.value });
	};
	const handlePhoneChange = value => {
		//console.log(value)
		setUserData({...userData, mobileNumber:value})
	}
	const handleDateChange = value => {
		setUserData({...userData, birthDate:value})
	}
	const onSubmit = event => {
		console.log(props.token)
		event.preventDefault();
		//validate data
		if (validateUser(userData)) {
			//call api
			props.save(userData,props.token);
		}
		//redirect to home page
		//props.history.push('/')
	};
	useEffect(() => {
	//	console.log(props.token)
		if (props.logoutSuccess) {
			//redirect to login page
			props.history.pushState(null, 'login');
		} else {
			console.log('logout Failed');
		}
	}, [props]);
	return (
		<form className='form-container'>
			<div className='blue'>
				{/* <div className='aiesec'>
					<div className='aiesecImg'>
						<img src={AiesecImg} alt='logo' />
					</div>
					<label className='headlbl'>AIN SHAMS UNIVERSITY</label>
				</div> */}

				<div className='logo'>
					<img src={MixImg} alt='logo' />
				</div>
			</div>

			<div className='white'>
				<div className='login'>
					<div className='container'>
						<div className='base-container'>
							<div className='content'>
								<h3 className='formLabel'> Finish your account </h3>
								<div className='homeForm'>
									<div className='row-data'>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-firstname-input'
												label='First Name'
												type='text'
												name='firstName'
												margin='normal'
												variant='outlined'
												style={{ width: '240px' }}
												// 
											/>
										</div>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-lastname-input'
												label='Last Name'
												type='text'
												name='lastName'
												margin='normal'
												variant='outlined'
												style={{marginLeft: '200px', width: '240px' }}
											/>
										</div>
						
						
									</div>
									<div className='row-data'>
									
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-nickname-input'
												label='Nick Name'
												type='text'
												name='nickName'
												margin='normal'
												variant='outlined'
												style={{width: '240px' }}
											
											/>
										</div>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-old-password-input'
												label='Old Password'
												type='password'
												name='oldPassword'
												margin='normal'
												variant='outlined'
												style={{ marginLeft: '200px', width: '240px' }}
											/>
										</div>
									</div>
									<div className='date-phone'>
									<div className='form-group'>
										<DatePickers 
										handleDateChange={handleDateChange}
										birthDate={userData.birthDate} />
									</div>
									<div className='form-group'>
										<MuiPhoneNumber
											required
											variant='outlined'
											className='phone-number'
											defaultCountry={'eg'}
											onChange={handlePhoneChange}
											name='mobileNumber'
											label="Phone Number"
											style={{ width: '600px'  }}
										/>
									</div>
									</div>
									
									<div className='row-data'>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-first-password-input'
												label='New Password'
												type='password'
												name='firstpassword'
												margin='normal'
												variant='outlined'
												style={{ marginRight: '200px', width: '240px' }}
											/>
										</div>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-second-password-input'
												name='password'
												label='Repeat Password'
												type='password'
												margin='normal'
												variant='outlined'
												style={{ width: '240px' }}
												autoComplete='false'
											/>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
					
				</div>
				
			</div>
			<div className='footer'>
								<Button
									onClick={onSubmit}
									type='submit'
									variant='primary'
									style={{
										width: '100px',
										marginTop: '-20px',
										marginRight: '50px',
										fontWeight: 'bold'
									}}>
									Save
								</Button>
								<Button
									onClick={props.logout}
									variant='primary'
									style={{
										width: '100px',
										marginTop: '-20px',
										marginRight: '550px',
										fontWeight: 'bold'
									}}>
									Cancel
								</Button>
							</div>
		</form>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout()),
		save: (userData,token) => dispatch(save(userData,token))
	};
};
const mapStateToProps = state => {
	return {
		token:state.login.token
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
