import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Search from './Search';

class App extends Component {
  render() {
    return (
		<Router>
			<div>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/search" component={Search}/>
			</div>
		</Router>
    )
  }
}

export default App;
