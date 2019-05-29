import { container, title, title1, title2, main, mainRaised } from 'assets/jss/material-kit-pro-react.jsx'
import footerStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx'

const presentationStyle = {
	...footerStyle,
	main: {
		...main
		/*overflow: "hidden"*/
	},
	mainRaised,
	parallax: {
		height: '90vh',
		overflow: 'hidden'
	},
	container: {
		...container,
		zIndex: 1
	},
	title: {
		...title,
		color: '#FFF !important'
	},
	title1: {
		...title1,
		color: '#337467 !important'
	},
	title2: {
		...title2,
		color: '#337467 !important'
	},
	brand: {
		color: '#fff',

		textAlign: 'center',
		'& h1': {
			fontSize: '4.2rem',
			fontWeight: '600',
			display: 'inline-block',
			position: 'relative'
		},
		'& h5': {
			fontSize: '1.1rem',
			fontWeight: '600',
			display: 'inline-block',
			position: 'relative'
		}
	},

	brand1: {
		color: '#fff',
		marginTop: 0,
		textAlign: 'center',
		'& h1': {
			fontSize: '4.2rem',
			fontWeight: '600',
			display: 'inline-block',
			position: 'relative'
		}
	},
	proBadge: {
		position: 'relative',
		fontSize: '22px',
		textTransform: 'uppercase',
		fontWeight: '700',
		right: '-10px',
		padding: '10px 18px',
		top: '-30px',
		background: '#fff',
		borderRadius: '3px',
		color: '#444',
		lineHeight: '22px',
		boxShadow: '0 5px 5px -2px rgba(31,31,31,.4)'
	}
}

export default presentationStyle
