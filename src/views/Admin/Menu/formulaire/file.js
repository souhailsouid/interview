import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentfile } from 'actions/menu/formulaire/fileActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FileUpload from './table'
class SectionfileAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentfile()
	}

	render() {
		const { classes, ...rest } = this.props
		const { file } = this.props.file
		const DataElements = file.map((file) => <FileUpload file={file} />)

		return (
			<div className="cd-section" {...rest}>
				<div className={classes.blog}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
								<h2 className={classes.title} style={{ textAlign: 'center' }}>
									{' '}
									Fichier à uploader
								</h2>
								<br />
							</GridItem>
						</GridContainer>

						{DataElements}
					</div>
				</div>
			</div>
		)
	}
}

SectionfileAdmin.propTypes = {
	getCurrentfile: PropTypes.func.isRequired,
	file: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	file: state.file
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentfile })(withRouter(SectionfileAdmin))
)
