import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Footer from 'components/Footer/Footer.jsx'
import udemy from 'assets/img/udemy.jpg'
import corpalif from 'assets/img/corpalif.png'
import styles from 'assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx'

const SectionFooter = (props) => {
	const { classes } = props
	return (
		<div
			className={classes.section}
			style={{ paddingTop: 60, paddingBottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.14)' }}
		>
			<div>
				<Footer
					theme="dark"
					content={
						<div
							style={{
								justifyContent: 'space-between',
								flexWrap: 'wrap',
								display: 'flex'
							}}
						>
							<div className={classes.left}>
								<List className={classes.list} />
							</div>{' '}
							<div className={classes.right}>@ {1900 + new Date().getYear()} Tous droits réservés</div>
						</div>
					}
				>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<h5>À propos</h5>
							<p>
								Cette démonstration est inspirée de ma dernière expérience chez la Corpalif et mes
								veilles en programmation.
							</p>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<div className={classes.socialFeed}>
								<h5> Développeur web</h5>
								<div>
									<a
										href="https://www.linkedin.com/in/souhail-souid-81181915b/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-linkedin" />
										<p> Souhail SOUID</p>
									</a>
								</div>
							</div>
						</GridItem>
						<GridItem xs={12} sm={10} md={4}>
							<h5>Inspirations</h5>
							<div className={classes.galleryFeed}>
								<a href="https://www.corpalif.fr/" target="_blank" rel="noopener noreferrer">
									<img
										src={corpalif}
										style={{ padding: 0, marginBottom: 0, height: 70 }}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<br />

									<div className={classes.socialFeed}>
										<div>
											<p>Corpalif</p>
										</div>
									</div>
								</a>
								<br />
							</div>
							<div className={classes.galleryFeed}>
								<br />
								<a href="http://www.udemy.com/" target="_blank" rel="noopener noreferrer">
									<img
										src={udemy}
										className={classNames(classes.img, classes.imgRaised, classes.imgRounded)}
										alt="..."
									/>
									<div className={classes.socialFeed}>
										<div>
											<p style={{ paddingTop: 10 }}>Udemy</p>
										</div>
									</div>
								</a>
							</div>
						</GridItem>
					</GridContainer>
				</Footer>
			</div>
		</div>
	)
}

export default withStyles(styles)(SectionFooter)
