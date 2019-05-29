/* eslint-disable */
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// @material-ui/icons
import Icon from '@material-ui/core/Icon'
import AccountBalance from '@material-ui/icons/AccountBalance'
import Book from '@material-ui/icons/Book'
import ArtTrack from '@material-ui/icons/ArtTrack'
import ViewQuilt from '@material-ui/icons/ViewQuilt'
import LocationOn from '@material-ui/icons/LocationOn'
import LocationCity from '@material-ui/icons/LocationCity'
import Layers from '@material-ui/icons/Layers'
import Work from '@material-ui/icons/Work'
import Apps from '@material-ui/icons/Apps'
import PersonAdd from '@material-ui/icons/PersonAdd'
import Dns from '@material-ui/icons/Dns'
import ListIcon from '@material-ui/icons/List'
import People from '@material-ui/icons/People'
// core components

import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import FileUpload from './upload_file/getfile'

// Redux

import { compose } from 'redux'
import { connect } from 'react-redux'
import { getCurrentProfile, clearCurrentProfile } from '../../actions/profileActions'
import { getCurrentfile } from 'actions/menu/formulaire/fileActions'
import { logoutUser } from '../../actions/authActions'

class HeaderLinksConnection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loginModal: true,
			email: '',
			password: '',
			errors: {},
			displaySnack: false,
			snack: { variant: 'error', message: 'Connexion refusée !' }
		}
	}
	onLogoutClick = (e) => {
		e.preventDefault()
		this.props.clearCurrentProfile()
		this.props.logoutUser()
	}
	componentDidMount = () => {
		this.props.getCurrentProfile()
		this.props.getCurrentfile()
	}
	easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) return c / 2 * t * t + b
		t--
		return -c / 2 * (t * (t - 2) - 1) + b
	}

	smoothScroll(e, target) {
		if (window.location.pathname === '/') {
			var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault()
				var targetScroll = document.getElementById(target)
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
			}
		}
	}

	render() {
		const scrollGo = (element, to, duration) => {
			var start = element.scrollTop,
				change = start - to,
				currentTime = 0,
				increment = 60

			var animateScroll = function() {
				currentTime += increment
				var val = easeInOutQuad(currentTime, start, change, duration)
				element.scrollTop = val
				if (currentTime < duration) {
					setTimeout(animateScroll, increment)
				}
			}
			animateScroll()
		}
		const { file } = this.props.file
		const File = file.map((file) => <FileUpload file={file} />)
		const { classes, dropdownHoverColor } = this.props
		const { isAuthenticated, user } = this.props.auth

		return (
			<div>
				<List className={classes.list + ' ' + classes.mlAuto}>
					<ListItem className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor="transparent"
							buttonText="Coordination régionale"
							buttonProps={{
								className: classes.navLink,
								color: 'transparent'
							}}
							buttonIcon={Apps}
							dropdownList={[
								<Link to="/menu/coordinationregionale/corpalif/" className={classes.dropdownLink}>
									<div style={{ margin: 2 }}>
										{<Apps className={classes.dropdownIcons} />}Notre association
									</div>
								</Link>,
								<Link
									to="/menu/coordinationregionale/orientationregionale/"
									className={classes.dropdownLink}
								>
									<div style={{ margin: 2 }}>
										{<ArtTrack className={classes.dropdownIcons} />}Orientations régionales
									</div>
								</Link>,
								<Link to="/menu/veillemedicale/evenements/" className={classes.dropdownLink}>
									<div style={{ margin: 2 }}>
										{<PersonAdd className={classes.dropdownIcons} />}Adhérer
									</div>
								</Link>,
								<Link to="/menu/Contact" className={classes.dropdownLink}>
									<div style={{ display: 'flex', color: 'rgb(51, 51, 51' }}>
										{<Icon className={classes.dropdownIcons}>content_paste</Icon>}
										<div style={{ display: 'flex', marginLeft: 5 }}>Contact</div>
									</div>
								</Link>
							]}
						/>
					</ListItem>
					<ListItem className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor="transparent"
							buttonText="Les soins palliatifs"
							buttonProps={{
								className: classes.navLink,
								color: 'transparent'
							}}
							buttonIcon={Book}
							dropdownList={[
								<Link to="/menu/soinspalliatifs/demarche-palliative/" className={classes.dropdownLink}>
									<div style={{ margin: 2 }}>
										{<Dns className={classes.dropdownIcons} />} La demarche palliative
									</div>
								</Link>,
								<Link to="/annuaire-francilien" className={classes.dropdownLink}>
									<div style={{ margin: 2 }}>
										{<LocationCity className={classes.dropdownIcons} />}
										Les structures de prise en charge
									</div>
								</Link>,
								<Link to="/menu/soinspalliatifs/legislation" className={classes.dropdownLink}>
									<div style={{ display: 'flex', color: '#333' }}>
										{<ListIcon className={classes.dropdownIcons} />}
										<div style={{ display: 'flex', color: '#333', marginLeft: 5 }}>Legislation</div>
									</div>
								</Link>,
								<Link to="/menu/soinspalliatifs/accompagnement/" className={classes.dropdownLink}>
									<div style={{ margin: 2 }}>
										{<People className={classes.dropdownIcons} />} Accompagner son proche
									</div>
								</Link>
							]}
						/>
					</ListItem>

					<ListItem className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor="transparent"
							buttonText="Veille médicale"
							buttonProps={{
								className: classes.navLink,
								color: 'transparent'
							}}
							buttonIcon={Book}
							dropdownList={[
								<Link to="/menu/veillemedicale/recommandation&outils/" className={classes.dropdownLink}>
									<AccountBalance className={classes.dropdownIcons} /> Recommandations et outils
								</Link>,
								<Link to="/menu/veillemedicale/actualites/" className={classes.dropdownLink}>
									<ArtTrack className={classes.dropdownIcons} /> Actualités nationales et régionales
								</Link>,
								<Link to="/menu/veillemedicale/evenements/" className={classes.dropdownLink}>
									<ViewQuilt className={classes.dropdownIcons} /> Evènements
								</Link>,
								<Link to="/menu/veillemedicale/nosrencontres" className={classes.dropdownLink}>
									<LocationOn className={classes.dropdownIcons} /> Nos rencontres
								</Link>
							]}
						/>
					</ListItem>

					<ListItem className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor="transparent"
							buttonText="Emploi - Formation"
							buttonProps={{
								className: classes.navLink,
								color: 'transparent'
							}}
							buttonIcon={Work}
							dropdownList={[
								<Link to="/offres-d'emplois" className={classes.dropdownLink}>
									<Work className={classes.dropdownIcons} /> Offres d'emploi
								</Link>,
								<Link to="/formations" className={classes.dropdownLink}>
									<Layers className={classes.dropdownIcons} /> Formations
								</Link>
							]}
						/>
					</ListItem>
				</List>
			</div>
		)
	}
}
HeaderLinksConnection.defaultProps = {
	hoverColor: 'primary'
}

HeaderLinksConnection.propTypes = {
	getCurrentfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	dropdownHoverColor: PropTypes.oneOf([ 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose' ]),
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	file: state.file,
	auth: state.auth
})
export default compose(withStyles(headerLinksStyle))(
	connect(mapStateToProps, { logoutUser, clearCurrentProfile, getCurrentProfile, getCurrentfile })(
		HeaderLinksConnection
	)
)
