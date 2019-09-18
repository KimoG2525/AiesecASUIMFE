import React, { useState, useEffect } from 'react';
import './style.scss';
import MixImg from '../../../assets/images/mix.png';
import AiesecImg from '../../../assets/images/aiesec.png';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { validateUser } from '../../../HelperFunctions/validation';
import { save, logout } from './state/actions';
import MuiPhoneNumber from 'material-ui-phone-number';
import datePicker from '../../sideComponents/datePicker';
import DatePicker from '../../sideComponents/datePicker';
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
		setUserData({ [event.target.name]: event.target.value });
	};
	const onSubmit = event => {
		event.preventDefault();
		//validate data
		if (validateUser(userData)) {
			//call api
			props.save(userData);
		}
		//redirect to home page
	};
	useEffect(() => {
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
									<div className='names'>
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
												style={{ width: '200px' }}
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
												style={{marginLeft: '100px', width: '200px' }}
											/>
										</div>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-firstname-input'
												label='Nick Name'
												type='text'
												name='firstName'
												margin='normal'
												variant='outlined'
												style={{marginLeft: '100px', width: '200px' }}
												// marginRight: '200px',
											/>
										</div>
									</div>
									<div className='personal-data'>
									<div className='form-group'>
										<DatePickers />
									</div>
									<div className='form-group'>
										<MuiPhoneNumber
											required
											variant='outlined'
											className='phone-number'
											defaultCountry={'eg'}
											onChange={onchange}
											name='mobileNumber'
											label="Phone Number"
										/>
									</div>
									</div>
									<div className='passwords'>
										<div className='form-group'>
											<TextField
												required
												onChange={handleChange}
												id='outlined-first-password-input'
												label='Password'
												type='password'
												name='firstpassword'
												margin='normal'
												variant='outlined'
												style={{ marginRight: '200px', width: '300px' }}
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
												style={{ width: '300px' }}
												autoComplete='false'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='footer'>
								<Button
									onClick={onSubmit}
									type='submit'
									variant='outline-primary'
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
									variant='outline-primary'
									style={{
										width: '100px',
										marginTop: '-20px',
										marginRight: '550px',
										fontWeight: 'bold'
									}}>
									Cancel
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout()),
		save: userData => dispatch(save(userData))
	};
};
const mapStateToProps = state => {
	return state.form;
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
