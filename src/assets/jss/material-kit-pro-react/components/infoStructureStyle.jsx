// ##############################
// // // Info component styles
// #############################

import {
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
	grayColor,
	greenColor,
	title
} from 'assets/jss/material-kit-pro-react.jsx'

const infoStyle = {
	infoArea: {
		margin: '0 auto',
		padding: '20px 0 30px'
	},
	iconWrapper: {
		float: 'left',
		marginTop: '20px',
		textAlign: 'center'
	},
	primary: {
		color: primaryColor
	},
	warning: {
		color: warningColor
	},
	danger: {
		color: dangerColor
	},
	success: {
		color: successColor
	},
	info: {
		color: infoColor
	},
	rose: {
		color: roseColor
	},
	gray: {
		color: grayColor
	},
	green: {
		color: greenColor
	},
	// red: {
	// 	color: redColor
	// },
	icon: {
		width: '2.25rem',
		height: '2.25rem',
		fontSize: '2.25rem'
	},
	descriptionWrapper: {
		color: grayColor,
		overflow: 'hidden'
	},
	title: {
		...title,
		margin: '1.75rem 0 0.875rem !important',
		minHeight: 'unset'
	},
	description: {
		color: grayColor,
		overflow: 'hidden',
		marginTop: '0px',
		'& p': {
			color: grayColor,
			fontSize: '14px'
		}
	},
	iconWrapperVertical: {
		float: 'none'
	},
	iconVertical: {
		width: '61px',
		height: '61px'
	}
}

export default infoStyle
