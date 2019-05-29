import { container, title, cardTitle, description, mlAuto, mrAuto } from 'assets/jss/material-kit-pro-react.jsx'

import modalStyle from 'assets/jss/material-kit-pro-react/modalStyle.jsx'
import tooltipsStyle from 'assets/jss/material-kit-pro-react/tooltipsStyle.jsx'
import popoverStyles from 'assets/jss/material-kit-pro-react/popoverStyles.jsx'
import customCheckboxRadioSwitch from 'assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx'
import { greenColor } from 'assets/jss/material-kit-pro-react.jsx'

const javascriptStyles = (theme) => ({
	container,
	description,
	cardTitle,
	mlAuto,
	mrAuto,
	title,
	...tooltipsStyle,
	...popoverStyles,
	...modalStyle(theme),
	...customCheckboxRadioSwitch,
	section: {
		padding: '70px 0 0'
	},

	icon: {
		width: '24px',
		height: '24px',
		color: '#495057'
	},
	label: {
		color: 'rgba(0, 0, 0, 0.26)',
		cursor: 'pointer',
		display: 'inline-flex',
		fontSize: '14px',
		transition: '0.3s ease all',
		lineHeight: '1.428571429',
		fontWeight: '400',
		paddingLeft: '0'
	},
	textCenter: {
		textAlign: 'center'
	},
	cardTitleWhite: {
		...cardTitle,
		color: '#FFFFFF !important'
	},
	socialLine: {
		marginTop: '1rem',
		textAlign: 'center',
		padding: '0'
	},
	socialLineButton: {
		'&, &:hover': { color: '#fff' },
		marginLeft: '5px',
		marginRight: '5px'
	},
	cardLoginHeader: {
		marginTop: '-40px',
		padding: '20px 0',
		width: '100%',
		marginBottom: '15px'
	},
	cardLoginBody: {
		paddingTop: '0',
		paddingBottom: '0'
	},
	justifyContentCenter: {
		WebkitBoxPack: 'center !important',
		MsFlexPack: 'center !important',
		justifyContent: 'center !important'
	},
	infoArea: {
		padding: '0px 0px 20px !important'
	},

	space50: {
		height: '50px',
		display: 'block'
	},
	features1: {
		textAlign: 'center',
		padding: '80px 0'
	},
	features2: {
		padding: '80px 0'
	},
	features3: {
		padding: '80px 0',
		'& $phoneContainer': {
			maxWidth: '220px',
			margin: '0 auto'
		}
	},
	features4: {
		padding: '80px 0',
		'& $phoneContainer': {
			maxWidth: '260px',
			margin: '60px auto 0'
		}
	},
	features5: {
		padding: '10px 0',
		backgroundSize: 'cover',
		backgroundPosition: '50%',
		backgroundRepeat: 'no-repeat',
		position: 'relative',
		'& $title': {
			marginBottom: '10px'
		},
		'& $title,& $container': {
			position: 'relative',
			zIndex: '2',
			color: '#000000'
		},
		'&:after': {
			background: '#fff',
			position: 'absolute',
			width: '100%',
			height: '100%',
			content: "''",
			zIndex: '0',
			left: '0px',
			top: '0px'
		},
		'& $container': {
			'& $gridContainer:last-child': {
				'& $gridItem': {
					borderBottom: '0'
				}
			},
			'& $gridItem': {
				border: '1px solid ',
				borderTop: '0',
				borderLeft: '0',
				color: '#D3D3D3',
				'&:last-child': {
					borderRight: '0'
				}
			}
		},
		'& $infoArea5': {
			textAlign: 'center',
			maxWidth: '310px',

			'& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
				color: '#000000'
			},
			'& h3': {
				color: '#cc4949'
			}
		},
		'& $infoArea5:hover': {
			textAlign: 'center',
			maxWidth: '310px',

			'& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
				color: '#fff'
			},
			'& h3': {
				color: '#77be77 !important'
			},
			backgroundColor: '#337467 !important',
			color: '#FFF'
		}
	},
	gridContainer: {},
	gridItem: {},

	phoneContainer: {
		'& img': {
			width: '100%'
		}
	},

	infoArea5: {
		maxWidth: '360px',
		margin: '0 auto',
		padding: '15px 0 5px'
	},
	selectLabelBis: {
		fontSize: '12px',
		textTransform: 'uppercase',

		top: '0px',

		marginLeft: 20
	},
	selectFormControlBis: {
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
	}
})

export default javascriptStyles
