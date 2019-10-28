import React, { useState, useEffect, useRef } from 'react';
import AiesecImg from '../../../assets/images/aiesec.png';
import LoginImg from '../../../assets/images/login.png';
import PopUp from '../../sideComponents/popUp';
import './style.scss';
import { connect } from 'react-redux';
import { validateEmail } from '../../../global/functions/validation';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { register } from './state/actions';
import ComboBox from '../../sideComponents/comboBoxRegister';
import { URL } from '../../../global/API_URL';
import Axios from 'axios';
const Register = props => {
	const [user, setUser] = useState({
		email: '',
		function: -1,
		position: -1
	});
	const [data, setData] = useState({
		function: [],
		position: []
	});
	//popup message when error occures
	const [popupMessage, setPopupMessage] = useState('Invalid Data.');
	const [emailError, setEmailError] = useState(false);
	const popUpRef = useRef();
	//gets all Available Functions and Positions in the Aiesec Domain and Spreads them into 2 Separate Arrays
	const getData = () => {
		Axios.all([
			Axios.get(URL + '/Miscellaneous/Functions'),
			Axios.get(URL + '/Miscellaneous/Positions')
		]).then(
			Axios.spread((func, pos) => {
				setData({ function: func.data, position: pos.data });
			})
		);
	};
	// handle Register, validates data and call the backend to register if the data are valid
	const handleClick = () => {
		if (
			validateEmail(user.email) &&
			(user.position >= 0 && user.position < data.position.length) &&
			(user.function >= 0 && user.function < data.function.length)
		) {
			setEmailError(false);
			//after validating the user input we register the user to the backend
			props.register(user);
			return;
		}
		// if the data not valid then we display popup message with error
		popUpRef.current.handleClickOpen();
		setEmailError(true);
	};
	//listening to the form status for errors or success registration
	useEffect(() => {
		if (props.error === 409) {
			setPopupMessage('Email already exists.');
			popUpRef.current.handleClickOpen();
			setEmailError(true);
		}
		if (props.success) {
			setPopupMessage('User Registered Successfully');
			popUpRef.current.handleClickOpen();
			setEmailError(false);
			setUser({ ...user, email: '', function: -1, position: -1 });
		}
	}, [props, user]);

	// handling change for input fields
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
	// getting the functions and positions when the component first mounts
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
// mapping the register action from the store to the form
const mapDispatchToProps = dispatch => {
	return {
		register: userName => dispatch(register(userName))
	};
};
// mapping the form status from the redux store
const mapStateToProps = state => {
	return {
		error: state.register.error,
		success: state.register.registerSucceded
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);
