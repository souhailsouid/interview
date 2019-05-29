import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Button from 'components/CustomButtons/Button.jsx'
const FileUpload = ({ file, classes }) => (
	<div>
		<ListItem className={classes.listItem}>
			<a href={"/formulaired'admission"} target="_blank" rel="noopener noreferrer">
				<Tooltip
					id="tooltip-bottom"
					title="Télécharger le formulaire d'admission en unité de soins palliatifs"
					placement="bottom"
					classes={{ tooltip: classes.tooltip }}
				>
					<Button className={classes.navButton} round style={{ backgroundColor: '#cc4949' }}>
						<i class="material-icons">description</i> Formulaire d'admission
					</Button>
				</Tooltip>
			</a>
		</ListItem>
	</div>
)

export default withStyles(headerLinksStyle)(FileUpload)
