import React from 'react'

// @material-ui/coßre components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons

import Edit from '@material-ui/icons/Edit'

// core components

import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

import tooltipsStyle from 'assets/jss/material-kit-pro-react/tooltipsStyle.jsx'
import Tooltip from '@material-ui/core/Tooltip'

const update = [ { color: 'white', icon: Edit } ].map((prop, key, props) => {
	return (
		<div>
			<Button round color={prop.color} key={key} style={{ color: '#1b2150', textALign: 'center' }}>
				Upload
			</Button>
		</div>
	)
})

const FileUpload = ({ file, classes }) => (
	<GridContainer>
		<GridItem xs={12} sm={12} md={12}>
			<Grid item xs={4} style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 30 }}>
				<Tooltip
					id="tooltip-right"
					title="Fichier à uploader"
					placement="left"
					classes={{ tooltip: classes.tooltip }}
				>
					<Link to={`/menu/formulaire/update/${file._id}`}>{update}</Link>
				</Tooltip>
			</Grid>

			<embed
				src={`/api/${file.file}`}
				download
				type="application/pdf"
				style={{ width: '100%', height: '1000px' }}
			/>
		</GridItem>
	</GridContainer>
)

export default withStyles(tooltipsStyle)(FileUpload)
