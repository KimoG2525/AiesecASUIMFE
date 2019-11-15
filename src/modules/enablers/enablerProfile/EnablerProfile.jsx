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
import CustomizedTables from '../../sideComponents/table';
import { connect } from 'react-redux';
import { getEnabler } from './state/actions';

const EnablerProfile = ({ getEnabler, match, enabler }) => {
	const id = match.params.id;
	useEffect(() => {
		getEnabler(id);
	}, [getEnabler, id]);

	const convert = enabler => {
		const myEnabler = {
			name: enabler.name,
			base64Logo: enabler.base64Logo,
			responsibleName: enabler.companyResponsible.name,
			responsiblePhone: enabler.companyResponsible.phoneNumber
		};
		return myEnabler;
	};

	const BodyRender = () => {
		if (enabler) {
			return (
				<div className='main-container'>
					<NavBar search={false} />
					<div className='top'>
						<Card big={true} enabler={convert(enabler)} />
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
										<label>{enabler.companyResponsible.name}</label>
										<label>{enabler.companyResponsible.phoneNumber}</label>
										<label>{enabler.companyResponsible.email}</label>
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
										<label>
											{enabler.aiesecResponsible.firstName}{' '}
											{enabler.aiesecResponsible.lastName}
										</label>
										<label>{enabler.aiesecResponsible.mobileNumber}</label>
										<label>{enabler.aiesecResponsible.user.email}</label>
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
										<LanguageOutlinedIcon
											style={{ fontSize: '30px', marginBottom: '10px' }}
										/>
										<MailOutlineOutlinedIcon
											style={{ fontSize: '30px', marginTop: '5px' }}
										/>
										<HomeOutlinedIcon
											style={{
												fontSize: '30px',
												marginBottom: '10px',
												marginTop: '10px'
											}}
										/>
									</div>
									<div className='labels'>
										<label
											style={{
												overflow: 'hidden',
												maxWidth: '230px',
												maxHeight: '22.4px'
											}}>
											{enabler.name}
										</label>
										<label>{enabler.mobileNumber}</label>
										<label style={{ overflow: 'hidden', maxWidth: '230px' }}>
											{' '}
											<a href={enabler.addressUrl} style={{ width: '100%' }}>
												{enabler.addressUrl}
											</a>{' '}
										</label>
										<label>{enabler.websiteUrl}</label>
										<label>{enabler.emailAddress}</label>
										<label>{enabler.address}</label>
									</div>
								</div>
							</div>
						</div>
						<div className='sheets'>
							<div className='datasheet'>
								<CustomizedTables />
							</div>
							<div className='datasheet'>
								<CustomizedTables />
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return <h1>Loading...</h1>;
		}
	};

	return <BodyRender />;
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
export default connect(mapStateToProps, mapDispatchToProps)(EnablerProfile);
