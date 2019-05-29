// ##############################
// // // CustomLinearProgress component styles
// #############################

import {
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	greenColor
} from 'assets/jss/material-kit-pro-react.jsx'

const customLinearProgressStyle = {
	root: {
		height: '4px',
		marginBottom: '20px',
		overflow: 'hidden'
	},
	bar: {
		height: '4px'
	},
	primary: {
		backgroundColor: primaryColor
	},
	warning: {
		backgroundColor: warningColor
	},
	danger: {
		backgroundColor: dangerColor
	},
	success: {
		backgroundColor: successColor
	},
	green: {
		backgroundColor: greenColor
	},
	info: {
		backgroundColor: infoColor
	},
	rose: {
		backgroundColor: roseColor
	},
	gray: {
		backgroundColor: grayColor
	},
	primaryBackground: {
		background: 'rgba(156, 39, 176, 0.2)'
	},
	greenBackground: {
		background: 'rgba(51, 116, 103, 0.35)'
	},
	warningBackground: {
		background: 'rgba(255, 152, 0, 0.2)'
	},
	dangerBackground: {
		background: 'rgba(244, 67, 54, 0.2)'
	},
	successBackground: {
		background: 'rgba(76, 175, 80, 0.2)'
	},
	infoBackground: {
		background: 'rgba(0, 188, 212, 0.2)'
	},
	roseBackground: {
		background: 'rgba(233, 30, 99, 0.2)'
	},
	grayBackground: {
		background: 'rgba(221, 221, 221, 0.2)'
	}
}

export default customLinearProgressStyle
