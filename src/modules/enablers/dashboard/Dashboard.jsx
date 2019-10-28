import React, { useEffect, useState } from 'react';
import Card from '../../sideComponents/card';
import NavBar from '../../sideComponents/navBar';
import ComboBox from '../../sideComponents/comboBoxDashboard';
import { connect } from 'react-redux';
import { getAllEnablers } from './state/actions';
import './style.scss';
const Dashboard = props => {
	const [pageNum, setPageNum] = useState(1);
	const convert = enabler => {
		return {
			name: enabler.data.name,
			base64Logo: enabler.data.base64Logo,
			responsibleName: enabler.data.responsibleName,
			responsiblePhone: enabler.data.responsiblePhone
		};
	};
	useEffect(() => {
		props.getAllEnablers(pageNum);
	});

	useEffect(() => {
		props.getAllEnablers(pageNum);
	}, [props, pageNum]);

	const BodyRender = () => {
		if (props.enablers.length) {
			return props.enablers.map((enabler, index) => (
				<Card
					enabler={() => convert(enabler)}
					key={index}
					big={false}
					history={props.history}
				/>
			));
		} else {
			return <h1>Loading....</h1>;
		}
	};

	return (
		<div className='main-container'>
			<NavBar />
			<div className='header'>
				<div className='head-label'>
					<h1>Enablers</h1>
				</div>
				<div className='combobox'>
					<ComboBox
						title='Sort'
						//data={data.position}
						childName='sort'
						//handleChange={handleChange}
						//selectedIndex={user.position}
					/>
				</div>
				<div className='combobox'>
					<ComboBox
						title='Filter'
						//data={data.position}
						childName='filter'
						//handleChange={handleChange}
						//selectedIndex={user.position}
					/>
				</div>
			</div>
			<div className='content'>
				<div className='body'>
					<BodyRender />
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		getAllEnablers: pageNum => dispatch(getAllEnablers(pageNum))
	};
};
const mapStateToProps = state => {
	return {
		enablers: state.dashboard.allEnablers
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
