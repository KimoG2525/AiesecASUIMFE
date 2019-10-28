import React, { useEffect } from 'react';
import Card from '../../sideComponents/card';
import NavBar from '../../sideComponents/navBar';
import './style.scss';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import { connect } from 'react-redux';
import { getEnabler } from './state/actions';

const EnablerProfile = props => {
	const id = props.match.params.id;

	const convert = enabler => {
		return {
			name: enabler.name,
			base64Logo: enabler.base64Logo,
			responsibleName: enabler.companyResponsible.name,
			responsiblePhone: enabler.companyResponsible.phoneNumber
		};
	};

	useEffect(() => {
		props.getEnabler(id);
	});
	return (
		<div className='main-container'>
			<NavBar />
			<div className='top'>
				<Card big={true} enabler={() => convert(props.enabler)} />
				<div className='responsible'>
					<div className='container'>
						<div className='head'>
							<HeadsetMicOutlinedIcon
								style={{
									fontSize: '30px',
									marginRight: '10px',
									marginLeft: '10px',
									marginTop: '0px'
								}}
							/>

							<label className='head-label'>Company Responsible</label>
						</div>
						<div className='list'>
							<div className='icons'>
								<PersonOutlineIcon
									style={{ fontSize: '20px', marginBottom: '10px' }}
								/>
								<PhoneOutlinedIcon
									style={{ fontSize: '20px', marginBottom: '10px' }}
								/>
								<MailOutlineOutlinedIcon style={{ fontSize: '20px' }} />
							</div>
							<div className='labels'>
								<label>{props.enabler.companyResponsible.name}</label>
								<label>{props.enabler.companyResponsible.phoneNumber}</label>
								<label>{props.enabler.companyResponsible.email}</label>
							</div>
						</div>
					</div>
				</div>
				<div className='responsible'>
					<div className='container'>
						<div className='head'>
							<HeadsetMicOutlinedIcon
								style={{
									fontSize: '30px',
									marginRight: '10px',
									marginLeft: '10px',
									marginTop: '0px'
								}}
							/>

							<label className='head-label'>AIESEC Responsible</label>
						</div>
						<div className='list'>
							<div className='icons'>
								<PersonOutlineIcon
									style={{ fontSize: '20px', marginBottom: '10px' }}
								/>
								<PhoneOutlinedIcon
									style={{ fontSize: '20px', marginBottom: '10px' }}
								/>
								<MailOutlineOutlinedIcon style={{ fontSize: '20px' }} />
							</div>
							<div className='labels'>
								<label>{props.enabler.aiesecResponsible.name}</label>
								<label>{props.enabler.aiesecResponsible.phone}</label>
								<label>{props.enabler.aiesecResponsible.email}</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bottomEnabler'>
				<div className='contact'>
					<div className='container'>
						<div className='head'>
							<HeadsetMicOutlinedIcon
								style={{
									fontSize: '30px',
									marginRight: '10px',
									marginTop: '10px',
									marginLeft: '10px'
								}}
							/>
							<label className='head-label'>CONTACT</label>
						</div>
						<div className='list'>
							<div className='icons'>
								<PersonOutlineIcon
									style={{ fontSize: '30px', marginBottom: '10px' }}
								/>
								<PhoneOutlinedIcon
									style={{ fontSize: '30px', marginBottom: '10px' }}
								/>
								<LocationOnOutlinedIcon
									style={{ fontSize: '30px', marginBottom: '10px' }}
								/>
								<HomeOutlinedIcon
									style={{ fontSize: '30px', marginBottom: '10px' }}
								/>
								<LanguageOutlinedIcon
									style={{ fontSize: '30px', marginBottom: '10px' }}
								/>
								<MailOutlineOutlinedIcon style={{ fontSize: '30px' }} />
							</div>
							<div className='labels'>
								<label>{props.enabler.name}</label>
								<label>{props.enabler.mobileNumber}</label>
								<label>{props.enabler.addressUrl}</label>
								<label>{props.enabler.address}</label>
								<label>{props.enabler.websiteUrl}</label>
								<label>{props.enabler.emailAddress}</label>
							</div>
						</div>
					</div>
				</div>
				<div className='map'>
					<div className='container'></div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		getEnabler: id => dispatch(getEnabler(id))
	};
};
const mapStateToProps = state => {
	return {
		enabler: state.enablerProfile.enablerState
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EnablerProfile);
