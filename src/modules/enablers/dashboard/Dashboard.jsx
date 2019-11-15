import React, { useEffect, useState } from 'react';
import Card from '../../sideComponents/card';
import NavBar from '../../sideComponents/navBar';
import ComboBox from '../../sideComponents/comboBoxDashboard';
import { connect } from 'react-redux';
import { getAllEnablers } from './state/actions';
//import ReactPaginate from 'react-paginate';
import '../dashboard/style.scss';
import Paging from '../../sideComponents/paging';

const Dashboard = ({ getAllEnablers, enablers, history }) => {
	const [pageNum, setPageNum] = useState(0);
	const convert = enabler => {
		const myEnabler = {
			name: enabler.name,
			base64Logo: enabler.base64Logo,
			responsibleName: enabler.responsibleName,
			responsiblePhone: enabler.responsiblePhone,
			id: enabler.id
		};
		return myEnabler;
	};

	const paginate = pageNum => {
		setPageNum(pageNum);
	};

	useEffect(() => {
		getAllEnablers(pageNum);
	}, [getAllEnablers, pageNum]);

	const BodyRender = () => {
		if (enablers.length !== 0) {
			return (
				<div className='body-render'>
					<div className='content'>
						<div className='dashboard-body'>
							{enablers.data.map((enabler, index) => (
								<Card
									enabler={convert(enabler)}
									key={index}
									big={false}
									history={history}
								/>
							))}
						</div>
					</div>
					<div className='paging-style'>
						<Paging totalPages={13} paginate={paginate} />
					</div>
				</div>
			);
		} else {
			return <h1>Loading....</h1>;
		}
	};

	return (
		<div className='main-container'>
			<NavBar search={true} />
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
			{BodyRender()}
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
