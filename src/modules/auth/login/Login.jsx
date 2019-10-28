import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import AiesecImg from '../../../assets/images/aiesec.png';
import TravelImg from '../../../assets/images/Earth.png';
import {
	validateEmail,
	validatePassword
} from '../../../global/functions/validation.js';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../login/state/actions';
import PopUp from '../../sideComponents/popUp';
import CheckBox from '../../sideComponents/checkBox';

const Home = props => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		rememberMe: false
	});
	const popUpRef = useRef();
	// this function validates the user credentials and call the endpoint to log the user into the website
	const onSubmit = () => {
		if (validatePassword(user.password) && validateEmail(user.email)) {
			props.login(user);
			setUser({
				email: '',
				password: '',
				rememberMe: false
			});
			return;
		} else {
			popUpRef.current.handleClickOpen();
		}
	};
	// listening to the login form actions if login succeded or failed
	useEffect(() => {
		if (props.loginFailed) {
			popUpRef.current.handleClickOpen();
		}
		if (props.loginSuccess) {
			if (props.hasCompletedRegisteration) props.history.push('/dashboard');
			else props.history.push('/completeregisteration');
		}
	}, [props]);

	const handleChange = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handleChecked = () => {
		setUser({ ...user, rememberMe: !user.rememberMe });
	};
	return (
		<div className='home'>
			<div className='blue'>
				<img className='img' src={TravelImg} alt='travel' />
			</div>
			<div className='white'>
				<div className='login'>
					<div className='container'>
						<div className='base-container'>
							<div className='content'>
								<div className='image'>
									<img src={AiesecImg} alt='logo' />
								</div>
								<label className='headLabel'>AIN SHAMS UNIVERSITY</label>
								<h3 className='loginLabel'> Login </h3>
								<div className='homeForm'>
									<div className='form-group'>
										<TextField
											required
											onChange={handleChange}
											id='outlined-email-input'
											label='Email'
											type='email'
											name='email'
											autoComplete='email'
											margin='normal'
											variant='outlined'
											value={user.email}
										/>
									</div>
									<div className='form-group'>
										<TextField
											required
											onChange={handleChange}
											id='outlined-password-input'
											name='password'
											label='Password'
											type='password'
											margin='normal'
											variant='outlined'
											value={user.password}
										/>
									</div>
									<div className='form-group'>
										<CheckBox
											checked={user.rememberMe}
											handleChecked={handleChecked}
										/>
									</div>
								</div>
							</div>
							<div className='footer'>
								<Button
									onClick={onSubmit}
									variant='outline-primary'
									style={{ width: '100px', marginTop: '-20px' }}>
									LOGIN
								</Button>
								<PopUp
									ref={popUpRef}
									title='Login Failed !'
									message='Incorrect Email or Password.'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
// mapping the login action from the store to the form
const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user))
	};
};
// mapping the form status to render correctly after logging in and to check if there are errors while logging in
const mapStateToProps = state => {
	return {
		loginFailed: state.login.loginFailed,
		loginSuccess: state.login.loginSuccess,
		hasCompletedRegisteration: state.login.hasCompletedRegisteration
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
