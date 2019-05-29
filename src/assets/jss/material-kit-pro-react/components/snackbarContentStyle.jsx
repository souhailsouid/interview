import {
	defaultFont,
	primaryBoxShadow,
	infoBoxShadow,
	successBoxShadow,
	warningBoxShadow,
	dangerBoxShadow,
	container
} from 'assets/jss/material-kit-pro-react.jsx'

const snackbarContentStyle = {
	root: {
		...defaultFont,
		position: 'relative',
		padding: '20px 15px',
		lineHeight: '20px',
		marginBottom: '20px',
		fontSize: '14px',
		backgroundColor: 'white',
		color: '#555555',
		borderRadius: '0px',
		maxWidth: '100%',
		minWidth: 'auto',
		boxShadow:
			'0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)'
	},
	info: {
		backgroundColor: '#00d3ee',
		color: '#ffffff',
		...infoBoxShadow
	},
	success: {
		backgroundColor: '#5cb860',
		color: '#ffffff',
		...successBoxShadow
	},
	warning: {
		backgroundColor: '#ffa21a',
		color: '#ffffff',
		...warningBoxShadow
	},
	danger: {
		backgroundColor: '#f55a4e',
		color: '#ffffff',
		...dangerBoxShadow
	},
	primary: {
		backgroundColor: '#af2cc5',
		color: '#ffffff',
		...primaryBoxShadow
	},

	green: {
		backgroundColor: '#337467',
		color: '#ffffff',
		...successBoxShadow
	},

	message: {
		padding: '0',
		display: 'block',
		maxWidth: '89%'
	},
	close: {
		width: '22px',
		height: '22px'
	},
	iconButton: {
		width: '24px',
		height: '24px',
		float: 'right',
		fontSize: '1.5rem',
		fontWeight: '500',
		lineHeight: '1',
		position: 'absolute',
		right: '-4px',
		top: '0',
		padding: '0'
	},
	icon: {
		display: 'block',
		float: 'left',
		marginRight: '1.071rem'
	},
	container: {
		...container,
		position: 'relative'
	},
	tooltip: {
		padding: '10px 15px',
		minWidth: '130px',
		color: '#FFFFFF',
		lineHeight: '1.7em',
		background: 'rgba(85,85,85,0.9)',
		border: 'none',
		borderRadius: '3px',
		boxShadow:
			'0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
		maxWidth: '200px',
		textAlign: 'center',
		fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
		fontSize: '0.875em',
		fontStyle: 'normal',
		fontWeight: '400',
		textShadow: 'none',
		textTransform: 'none',
		letterSpacing: 'normal',
		wordBreak: 'normal',
		wordSpacing: 'normal',
		wordWrap: 'normal',
		whiteSpace: 'normal',
		lineBreak: 'auto'
	}
}

export default snackbarContentStyle
