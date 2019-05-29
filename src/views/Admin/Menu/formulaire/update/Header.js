import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import profilePageStyle from 'assets/jss/material-kit-pro-react/views/profilePageStyle.jsx'
import Modal from './update'
// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class Updatefichier extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<Header
					brand={
						<img
							src="https://image.noelshack.com/fichiers/2019/22/3/1559102118-lesbonsartisansdef.png"
							alt="logo"
							style={{
								width: 100,
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
					}
					fixed
					changeColorOnScroll={{
						height: 400
					}}
				/>
				<div>
					<Parallax
						image={require('assets/img/examples/city.jpg')}
						className={classes.parallax}
						style={{ height: 1000 }}
					/>

					<GridItem xs={12} sm={12} md={12}>
						<Modal />
					</GridItem>
				</div>
			</div>
		)
	}
}

Updatefichier.propTypes = {
	classes: PropTypes.object.isRequired
}

export default compose(withStyles(profilePageStyle))(withRouter(Updatefichier))
