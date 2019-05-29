import React from 'react'
import { Link } from 'react-router-dom'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import ViewDay from '@material-ui/icons/ViewDay'
import Dns from '@material-ui/icons/Dns'
import ListIcon from '@material-ui/icons/List'
import People from '@material-ui/icons/People'
// core components
import headerStyle from 'assets/jss/material-kit-pro-react/components/headerStyle.jsx'
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
class LesSoinsPalliatifs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			mobileOpen: false
		}
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
		this.headerColorChange = this.headerColorChange.bind(this)
	}
	handleDrawerToggle() {
		this.setState({ mobileOpen: !this.state.mobileOpen })
	}
	componentDidMount() {
		if (this.props.changeColorOnScroll) {
			window.addEventListener('scroll', this.headerColorChange)
		}
	}
	headerColorChange() {
		const { classes, color, changeColorOnScroll } = this.props
		const windowsScrollTop = window.pageYOffset
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body.getElementsByTagName('header')[0].classList.remove(classes[color])
			document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color])
		} else {
			document.body.getElementsByTagName('header')[0].classList.add(classes[color])
			document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color])
		}
	}
	componentWillUnmount() {
		if (this.props.changeColorOnScroll) {
			window.removeEventListener('scroll', this.headerColorChange)
		}
	}
	render() {
		const { classes } = this.props

		return (
			<div style={{ display: 'flex' }}>
				<CustomDropdown
					buttonText="Les soins palliatifs"
					hoverColor="transparent"
					buttonProps={{
						round: true,
						block: true,
						color: 'transparent'
					}}
					buttonIcon={ViewDay}
					dropPlacement="bottom-start"
					dropdownList={[
						<CustomDropdown
							ref="multi"
							innerDropDown
							buttonText={
								<div style={{ margin: 2 }}>
									{<Dns className={classes.dropdownIcons} />} La demarche palliative
								</div>
							}
							buttonProps={{
								simple: true,
								block: true
							}}
							hoverColor="transparent"
							dropPlacement="right-start"
							dropdownList={[
								"Qu'est-ce que les soins palliatifs",
								<div style={{ color: '#cc4949' }}>Vrai / Faux</div>
							]}
						/>,

						<CustomDropdown
							ref="multi"
							innerDropDown
							buttonText={
								<div style={{ margin: 2 }}>
									{
										<i class="material-icons" className={classes.dropdownIcons}>
											location_city
										</i>
									}
									Les structures de prise en charge
								</div>
							}
							buttonProps={{
								simple: true,
								block: true
							}}
							hoverColor="transparent"
							dropPlacement="left-start"
							dropdownList={[
								<Link to="/about-us" style={{ color: '#333' }}>
									Qu'est-ce que les soins palliatifs
								</Link>,

								<Link to="/annuaire-francilien" style={{ color: '#333' }}>
									Annuaire Francilien
								</Link>
							]}
						/>,

						<Link to="/about-us">
							<div style={{ display: 'flex', color: '#333' }}>
								{<ListIcon className={classes.dropdownIcons} />}
								<div style={{ display: 'flex', color: '#333', marginLeft: 5 }}>Legislation</div>
							</div>
						</Link>,

						<CustomDropdown
							ref="multi"
							innerDropDown
							buttonText={
								<div style={{ margin: 2 }}>
									{<People className={classes.dropdownIcons} />} Accompagner son proche
								</div>
							}
							buttonProps={{
								simple: true,
								block: true
							}}
							hoverColor="transparent"
							dropPlacement="right-start"
							dropdownList={[ 'Être aidant', 'Liens utiles', 'Témoignages' ]}
						/>
					]}
				/>
			</div>
		)
	}
}

LesSoinsPalliatifs.defaultProp = {
	color: 'white'
}

LesSoinsPalliatifs.propTypes = {
	classes: PropTypes.object.isRequired,
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'transparent',
		'white',
		'rose',
		'dark'
	]),
	links: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// this.props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// this.props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			'primary',
			'info',
			'success',
			'warning',
			'danger',
			'transparent',
			'white',
			'rose',
			'dark'
		]).isRequired
	})
}

export default withStyles(headerStyle)(LesSoinsPalliatifs)
