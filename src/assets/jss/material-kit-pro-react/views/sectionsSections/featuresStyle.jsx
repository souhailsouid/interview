import { container, mlAuto, mrAuto, title, description } from 'assets/jss/material-kit-pro-react.jsx'

const features = {
	container,
	mlAuto,
	mrAuto,
	title,
	description,
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
		padding: '80px 0',
		backgroundSize: 'cover',
		backgroundPosition: '50%',
		backgroundRepeat: 'no-repeat',
		position: 'relative',
		'& $title': {
			marginBottom: '30px'
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

			'& h4, p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
				color: '#fff'
			},
			backgroundColor: '#337467 !important',
			color: '#FFF'
		}
		// '& $infoArea5:hover': {
		// 	textAlign: 'center',
		// 	maxWidth: '310px',
		// 	minHeight: '320px',
		// 	'& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
		// 		color: '#fff'
		// 	},
		// 	backgroundColor: '#337467 !important',
		// 	color: '#FFF'
		// }
	},
	gridContainer: {},
	gridItem: {},
	textCenter: {
		textAlign: 'center'
	},
	phoneContainer: {
		'& img': {
			width: '100%'
		}
	},
	infoArea: {
		maxWidth: 'none',
		margin: '0 auto',
		padding: '10px 0 0px'
	},
	infoArea5: {}
}

export default features