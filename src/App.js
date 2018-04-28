import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<Route path="/" render={() => (
				<MainPage />
				)} 
			/>
		</BrowserRouter>
    )
  }
}

export default App;
