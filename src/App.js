import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from "./views/Home"
import ProductInfo from "./views/ProductInfo"
import { MainWrapper } from './style/mainStyle'

const App = () => {
  return (
		<Router>
			<MainWrapper>
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/product/:id" component={ProductInfo} />
			</MainWrapper>
		</Router>
	)
}

export default App;
