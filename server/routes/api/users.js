const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')
const nodemailer = require('nodemailer')
const crypto = require('crypto')
const async = require('async')
var flash = require('express-flash')
var cors = require('cors')

require('dotenv').config()

// Load Input Validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')
const validateForgotpassInput = require('../../validation/forgotpass')
const validateResetpassinput = require('../../validation/resetpass')
const validateHelperText = require('../../validation/helperText')
// Load User model
const User = require('../../models/User')
const xoauth2 = require('xoauth2')
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }))

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body)

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors)
	}

	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			errors.email = 'Email already exists'
			return res.status(400).json(errors)
		} else {
			const newUser = new User({
				name: req.body.name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: req.body.password,
				status: req.body.status,

				isAdmin: req.body.isAdmin
			})

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err
					newUser.password = hash
					newUser.save().then((user) => res.json(user)).catch((err) => console.log(err))
				})
			})
			nodemailer.createTestAccount((err, account) => {
				var transporter = nodemailer.createTransport({
					service: process.env.NODEMAILER_SERVICE,
					// port: process.env.NODEMAILER_PORT,
					// secure: false, // true for 465, false for other ports
					auth: {
						user: process.env.NODEMAILER_USER,
						pass: process.env.NODEMAILER_PASS
					}
				})

				const htmlEmail = ` 
				${req.body.last_name}, 
				<p>
					bienvenue sur le site Internet de la Corpalif !
					<br/> 
					Votre inscription a bien été prise en compte, vous pouvez à tout moment modifier vos informations dans votre profil.
					<br/>
					Si vous souhaitez recevoir régulièrement nos mails (rencontres, offres d'emploi, actualités), merci de cocher la case "Je souhaite recevoir les mails de la Corpalif".
					<br/> 
					Vous pouvez également nous suivre sur nos pages Facebook et Linkedin.
          <br/>
					Pour participer activement à l'activité de l'association, n'hésitez pas à consulter notre page d'adhésion. 
          <br/>
          <br/>
					A très bientôt. 
          <br/>
					Corpalif
					</p>`
				let mailOptions = {
					from: process.env.NODEMAILER_USER, // sender address
					to: req.body.email,
					replyTo: req.body.email, // list of receivers
					subject: 'Inscription à la Corpalif ✔', // Subject line
					html: htmlEmail
				}
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						return console.log(error)
					}
					console.log('Message sent: %s', info.messageId)
					console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
					res.render('contact', { msg: 'Your message has been sent' })
				})
			})
		}
	})
})
// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body)

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors)
	}

	const email = req.body.email
	const password = req.body.password

	// Find user by email
	User.findOne({ email }).then((user) => {
		// Check for user
		if (!user) {
			errors.email = 'User not found'
			return res.status(404).json(errors)
		}

		// Check Password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User Matched
				const payload = {
					id: user.id,
					name: user.name,
					last_name: user.last_name,
					status: user.status,

					email: user.email,
					isAdmin: user.isAdmin
				} // Create JWT Payload

				// Sign Token
				jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
					res.json({
						success: true,
						token: 'Bearer ' + token
					})
				})
			} else {
				errors.password = 'Password incorrect'
				return res.status(400).json(errors)
			}
		})
	})
})

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name
	})
})

// @route Post api/users/api/form
// @desc Return contact details to corpalif
// @access Private
// Contact Form

router.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `

		<p>You have a new contact request</p>
		<h3>Contact Details</h3>
		<ul>
		<li>First_name: ${req.body.first_name}</li>
		<li>Last_name: ${req.body.last_name}</li>
		<li>Email: ${req.body.email}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>

		`
		let transporter = nodemailer.createTransport({
			service: process.env.NODEMAILER_SERVICE,

			auth: {
				user: process.env.NODEMAILER_USER,
				pass: process.env.NODEMAILER_PASS
			}
		})
		let mailOptions = {
			from: process.env.NODEMAILER_USER, // sender address
			to: process.env.NODEMAILER_USER,
			replyTo: process.env.NODEMAILER_USER, // list of receivers
			subject: 'Contact ✔', // Subject line
			text: 'Contact', // plain text body
			html: htmlEmail // html body
		}
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error)
			}
			console.log('Message sent: %s', info.messageId)
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
			res.render('contact', { msg: 'Your message has been sent' })
		})
	})
})

// @route GET api/forgot_password
// @desc Return forgot password
// @access Private
// forgot password
router.get('/forgot_password', function(req, res) {
	res.render('forgot')
})
router.post('/forgot_password', function(req, res, next) {
	async.waterfall([
		function(done) {
			crypto.randomBytes(20, function(err, buf) {
				var token = buf.toString('hex')
				done(err, token)
			})
		},
		function(token, done) {
			const { errors, isValid } = validateForgotpassInput(req.body)

			// Check Validation
			if (!isValid) {
				// Return any errors with 400 status
				console.log(errors)
				return res.status(400).json(errors)
			}
			User.findOne({ email: req.body.email }, function(err, user) {
				if (!user) {
					errors.forgot_password = 'No account with that email address exists.'
					return res.status(404).json(errors)
				}

				user.resetPasswordToken = token
				user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

				user.save(function(err) {
					done(err, token, user)
				})
			})
		},
		function(token, user, done) {
			var smtpTransport = nodemailer.createTransport({
				service: process.env.NODEMAILER_SERVICE,
				auth: {
					type: 'OAuth2',
					user: process.env.NODEMAILER_USER,
					clientId: process.env.NODEMAILER_CLIENTID,
					clientSecret: process.env.NODEMAILER_CLIENTSECRET,
					refreshToken: process.env.NODEMAILER_REFRESHTOKEN
				}
			})

			var mailOptions = {
				to: user.email,
				from: process.env.NODEMAILER_USER,
				subject: 'Mot de passe oublié',
				text:
					'Bonjour ' +
					'\n\n' +
					'vous recevez cet email, car vous avez demandé la réinitialisation de votre mot de passe.\n\n' +
					'Veuillez ouvrir ce lien pour poursuivre:  \n\n' +
					'http://' +
					'www.corpalif.com' +
					'/#/reset/' +
					token +
					'\n\n' +
					'Ps: Ce lien est valable uniquement une heure.\n' +
					'\n\n' +
					'Corpalif' +
					'\n\n'
			}
			smtpTransport.sendMail(mailOptions, function(err) {
				console.log('mail sent')

				console.log('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.')
				done(err, 'done')
			})
		},

		function(err) {
			return res.status(422).json({ message: err })
		}
	])
})

router.get('/reset/:token', function(req, res) {
	User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(
		err,
		user
	) {
		if (!user) {
			console.log('error', 'Password reset token is invalid or has expired.')
			return res.redirect('/forgot')
		}
		res.status('reset', {
			user: req.user
		})
	})
})
router.post('/reset/:token', (req, res) => {
	async.waterfall([
		function(done) {
			User.findOne({
				resetPasswordToken: req.params.token,
				resetPasswordExpires: { $gt: Date.now() }
			}).exec(
				function(err, user) {
					const { errors, isValid, helperText } =
						validateResetpassinput(req.body) || validateHelperText(req.body)

					// Check Validation
					if (!isValid) {
						// Return any errors with 400 status
						console.log(errors)
						return res.status(400).json(errors)
					}
					res.status(200).json(helperText)

					if (user) {
						if (req.body.password === req.body.password2) {
							user.password = bcrypt.hashSync(req.body.password, 10)
							user.resetPasswordToken = undefined
							user.resetPasswordExpires = undefined

							// user.save().then(console.log(user))

							user.save(function(err) {
								done(err, user)

								console.log(user, err)
							})
						}

						const htmlEmail = `
							<p>
								Bonjour ${user.last_name}
								<br />
								vous avez demandé la modification de votre mot de passe pour ${user.email}.<br />
								La modification a bien été prise en compte, vous pouvez dès maintenant vous connecter à
								votre espace sur notre site www.corpalif.org.
								<br />
								<br />
								A très bientôt
							</p>`

						var smtpTransport = nodemailer.createTransport({
							service: process.env.NODEMAILER_SERVICE,

							auth: {
								user: process.env.NODEMAILER_USER,
								pass: process.env.NODEMAILER_PASS
							}
						})

						var mailOptions = {
							to: user.email,
							from: process.env.NODEMAILER_USER,
							subject: 'Confirmation changement du mot de passe',
							html: htmlEmail
						}
						smtpTransport.sendMail(mailOptions, function(err) {
							console.log('mail sent')
							console.log(
								'success',
								'An e-mail has been sent to ' + user.email + ' with further instructions.'
							)
							done(err, 'done')
						})
					}
				},
				function(err) {
					return res.status(422).json({ message: err })
				}
			)
		}
	])
})

module.exports = router
