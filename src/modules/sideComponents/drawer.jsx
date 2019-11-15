import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../auth/completeRegisteration/state/actions';
const useStyles = makeStyles({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	}
});

const TemporaryDrawer = props => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [side]: open });
	};
	const redirect = obj => {
		if (obj.action)
			obj.action(() => {
				props.history.push(obj.route);
			});
		else {
			props.history.push(obj.route);
		}
	};
	const sideList = side => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}>
			<List>
				{[
					{ text: 'Enablers', icon: <DashboardIcon />, route: '/dashboard' },
					{ text: 'Profile', icon: <PersonIcon />, route: '/profile' },
					{
						text: 'Register New Aiesecer',
						icon: <AddIcon />,
						route: '/partialregister'
					},
					{
						text: 'Create New Enabler',
						icon: <CreateIcon />,
						route: '/addenabler'
					},
					{
						text: 'Sign Out',
						icon: <ExitToAppIcon />,
						route: '/',
						action: cb => {
							props.logout(cb);
						}
					}
				].map((obj, index) => (
					<ListItem button onClick={() => redirect(obj)} key={index}>
						<ListItemIcon>{obj.icon}</ListItemIcon>
						<ListItemText primary={obj.text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<Button onClick={toggleDrawer('right', true)}>
				<MenuRoundedIcon
					style={{ color: '#fff', fontSize: '30px', height: '47px' }}
				/>
			</Button>
			<Drawer
				anchor='right'
				open={state.right}
				onClose={toggleDrawer('right', false)}>
				{sideList('right')}
			</Drawer>
		</div>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		logout: cb => dispatch(logout(cb))
	};
};
export default withRouter(connect(null, mapDispatchToProps)(TemporaryDrawer));
