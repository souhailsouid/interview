import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/material-kit-pro-react.css?v=1.2.0'
import { Provider } from 'react-redux'
import store from './store'
// formulaire d'admission

import PresentationFile from 'views/Admin/Menu/formulaire/PresentationFile'
import Updatefichier from 'views/Admin/Menu/formulaire/update/Header'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					{/* fichier	*/}
					<div>
						<Route exact path="/" component={PresentationFile} />
						<Route exact path="/menu/formulaire/update/:id" component={Updatefichier} />
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
