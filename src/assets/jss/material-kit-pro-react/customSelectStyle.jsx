// ##############################
// // // CustomSelects styles
// #############################

import { greenColor, primaryBoxShadow } from 'assets/jss/material-kit-pro-react.jsx'

const customSelectStyle = {
	select: {
		padding: '12px 0 7px',
		fontSize: '.75rem',
		fontWeight: '400',
		lineHeight: '1.42857',
		textDecoration: 'none',
		textTransform: 'uppercase',

		letterSpacing: '0',

		'&:focus': {
			backgroundColor: 'transparent',
			color: '#3C4858'
		},
		'&[aria-owns] + input + svg': {
			transform: 'rotate(180deg)'
		},
		'& + input + svg': {
			transition: 'all 300ms linear'
		}
	},
	selectFormControl: {
		margin: '10px 1px 10px 0px !important',

		'& > div': {
			'&:before': {
				borderBottomWidth: '1px !important',
				borderBottomColor: '#D2D2D2 !important'
			},
			'&:after': {
				borderBottomColor: greenColor + '!important'
			}
		}
	},
	selectFormControlBis: {
		margin: '10px 1px 10px 0px !important',
		'& > div': {
			'&:before': {
				borderBottomWidth: '0px !important',
				borderBottomColor: '#D2D2D2 !important'
			},
			'&:after': {
				borderBottomColor: greenColor + '!important'
			}
		}
	},

	selectLabel: {
		fontSize: '12px',
		textTransform: 'uppercase',
		color: '#3C4858 !important',
		top: '8px',
		marginLeft: 10
	},
	selectLabelBis: {
		fontSize: '12px',
		textTransform: 'uppercase',

		top: '0px',

		marginLeft: 20
	},
	selectMenu: {
		'& > div > ul': {
			border: '0',
			color: '#fff',
			padding: '5px 0',
			margin: '0',
			boxShadow: 'none',
			minWidth: '100%',
			borderRadius: '4px',
			boxSizing: 'border-box',
			display: 'block',
			fontSize: '14px',
			textAlign: 'left',
			listStyle: 'none',
			backgroundColor: '#fff',
			backgroundClip: 'padding-box'
		},
		'& $selectPaper $selectMenuItemSelectedMultiple': {
			backgroundColor: 'inherit'
		}
	},
	selectMenuItem: {
		fontSize: '13px',
		padding: '10px 20px',
		margin: '0 5px',
		borderRadius: '2px',
		transition: 'all 150ms linear',
		display: 'block',
		clear: 'both',
		fontWeight: '400',
		lineHeight: '2',
		whiteSpace: 'nowrap',
		color: '#333',
		paddingRight: '30px',
		'&:hover': {
			backgroundColor: greenColor,
			color: '#FFFFFF',
			...primaryBoxShadow
		}
	},
	selectMenuItemSelected: {
		backgroundColor: greenColor + '!important',
		color: '#fff'
	},
	selectMenuItemSelectedMultiple: {
		'&:hover': {
			backgroundColor: greenColor + '!important',
			color: '#FFFFFF',
			...primaryBoxShadow,
			'&:after': {
				color: '#FFFFFF'
			}
		},
		'&:after': {
			top: '16px',
			right: '12px',
			width: '12px',
			height: '5px',
			borderLeft: '2px solid currentColor',
			transform: 'rotate(-45deg)',
			opacity: '1',
			color: '#fff',
			position: 'absolute',
			content: "''",
			borderBottom: '2px solid currentColor',
			transition: 'opacity 90ms cubic-bezier(0,0,.2,.1)'
		}
	},
	selectPaper: {
		boxSizing: 'borderBox',
		borderRadius: '4px',
		padding: '0',
		minWidth: '100%',
		display: 'block',
		border: '0',
		boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
		backgroundClip: 'padding-box',
		margin: '2px 0 0',
		fontSize: '14px',
		textAlign: 'left',
		listStyle: 'none',
		backgroundColor: 'transparent',
		maxHeight: '266px'
	}
}

export default customSelectStyle
