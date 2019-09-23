import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import AiesecImg from '../../../assets/images/aiesec.png';
import TravelImg from '../../../assets/images/Earth.png';
import {
	validateEmail,
	validatePassword
} from '../../../HelperFunctions/validation.js';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../Home/state/actions';
import PopUp from '../../sideComponents/popUp';
import CheckBox from '../../sideComponents/checkBox';

const Home = props => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		rememberMe: false
	});
	const [error, setError] = useState({ email: false, password: false });
	const popUpRef = useRef();

	const onSubmit = () => {
		if (validatePassword(user.password) && validateEmail(user.email)) {
			setError({ ...error, email: false, password: false });
			props.login(user);
			setUser({
				email: '',
				password: '',
				rememberMe: false
			});
			return;
		} else {
			popUpRef.current.handleClickOpen();
			setError({ ...error, email: true, password: true });
		}
	};
	useEffect(() => {
		if (props.loginFailed) {
			popUpRef.current.handleClickOpen();
		}
		if (props.loginSuccess) {
			if (props.hasCompletedRegisteration) props.history.push('/form');
			else props.history.push('/form');
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
											error={error.email}
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
											error={error.password}
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
const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user))
	};
};
const mapStateToProps = state => {
	return {
		loginFailed: state.login.loginFailed,
		token: state.login.token,
		loginSuccess: state.login.loginSuccess,
		hasCompletedRegisteration: state.login.hasCompletedRegisteration
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
