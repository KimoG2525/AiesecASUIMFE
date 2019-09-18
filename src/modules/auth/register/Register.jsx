import React, { useState, useEffect, useRef } from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import LoginImg from '../../../assets/images/login.png';
import PopUp from '../../sideComponents/popUp';
import './style.scss';
import { connect } from 'react-redux';
import { validateEmail } from '../../../HelperFunctions/validation.js';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { register } from './state/actions';
import ComboBox from '../../sideComponents/comboBox';
import Axios from 'axios';
const Register = props => {
	const [user, setUser] = useState({
		email: '',
		function: 0,
		position: 0
	});
	const [data, setData] = useState({
		function: [],
		position: []
	});
	const [popupMessage, setPopupMessage] = useState('Invalid Data.');
	const [emailError, setEmailError] = useState(false);
	const popUpRef = useRef();
	const getData = () => {
		Axios.all([
			Axios.get(
				'https://aiesec-asu-im-api.herokuapp.com/api/Miscellaneous/Functions'
			),
			Axios.get(
				'https://aiesec-asu-im-api.herokuapp.com/api/Miscellaneous/Positions'
			)
		]).then(
			Axios.spread((func, pos) => {
				setData({ function: func.data, position: pos.data });
			})
		);
	};
	const handleClick = () => {
		if (
			validateEmail(user.email) &&
			(user.position >= 0 && user.position < data.position.length) &&
			(user.function >= 0 && user.function < data.function.length)
		) {
			setEmailError(false);
			props.register(user);
			return;
		}
		popUpRef.current.handleClickOpen();
		setEmailError(true);
	};
	useEffect(() => {
		if (props.error === 409) {
			setPopupMessage('Email already exists.');
			popUpRef.current.handleClickOpen();
			setEmailError(true);
		}
	}, [props.error]);
	const handleChange = event => {
		if (event.target.name === 'email') {
			setUser({ ...user, email: event.target.value });
			return;
		}
		for (var i = 0; i < data[event.target.name].length; i++) {
			if (data[event.target.name][i].value === event.target.value) {
				setUser({
					...user,
					[event.target.name]: i
				});
				return;
			}
		}
		setUser({
			...user,
			[event.target.name]: -1
		});
	};
	useEffect(() => getData(), []);
	return (
		<div className='registerhome'>
			<div className='blue'>
				<img src={LoginImg} alt='logo' />
			</div>
			<div className='white'>
				<div className='register'>
					<div className='register-container'>
						<div className='register-base-container'>
							<div className='register-header' />
							<div className='register-content'>
								<div className='image'>
									<img src={AiesecImg} alt='logo' />
								</div>
								<label className='headLabel'>AIN SHAMS UNIVERSITY</label>
								<h3 className='loginLabel'> Register </h3>

								<div className='registerForm'>
									<div className='form-group'>
										<TextField
											error={emailError}
											label='Email'
											type='email'
											name='email'
											autoComplete='email'
											margin='normal'
											variant='outlined'
											onChange={handleChange}
										/>
									</div>
									<div className='combobox'>
										<ComboBox
											title='Position'
											data={data.position}
											childName='position'
											handleChange={handleChange}
											selectedIndex={user.position}
										/>
										<ComboBox
											title='Function'
											data={data.function}
											childName='function'
											handleChange={handleChange}
											selectedIndex={user.function}
										/>
									</div>
								</div>
							</div>
							<div className='footer'>
								<Button
									onClick={handleClick}
									variant='outline-primary'
									style={{ width: '100px', fontWeight: 'bold' }}>
									REGISTER
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PopUp
				ref={popUpRef}
				id='PopupMessage'
				title='Register Failed !'
				message={popupMessage}
			/>
		</div>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		register: userName => dispatch(register(userName))
	};
};
const mapStateToProps = state => {
	return {
		error: state.register.error
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
