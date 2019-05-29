import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import SectionFooter from 'views/Footer/SectionFooter'
import Header from 'components/Header/Header.jsx'
import SectionfileAdmin from './file'
// section CSS

class PresentationFile extends React.Component {
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
				<div className={classNames(classes.main, classes.mainRaised)}>
					<SectionfileAdmin />
					<SectionFooter />
				</div>
			</div>
		)
	}
}

export default withStyles(presentationStyle)(PresentationFile)
