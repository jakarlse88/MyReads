import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Search from './Search';
import * as BooksAPI from './BooksAPI';

class App extends Component {
	state = {
		currentlyReading: [],
		wantToRead: [],
		read: []
};

componentDidMount() {
		BooksAPI.getAll().then(( books ) => {
				this.setState({ 
						currentlyReading: books.filter( book => book.shelf === 'currentlyReading'),
						wantToRead: books.filter( book => book.shelf === 'wantToRead'),
						read: books.filter( book => book.shelf === 'read')
				});
		});
}

update = () => {
		BooksAPI.getAll().then(( books ) => {
				this.setState({ 
						currentlyReading: books.filter( book => book.shelf === 'currentlyReading'),
						wantToRead: books.filter( book => book.shelf === 'wantToRead'),
						read: books.filter( book => book.shelf === 'read')
				});
		});
}

  render() {
    return (
		<Router>
			<div>
				<Route exact path="/" render={() => (
					<MainPage
						books = {this.state}
						updateMain = {this.update}
					/> 
					)}
				/>
				<Route exact path="/search" render={() => (
					<Search
						books = {this.state}
						updateMain = {this.update}
					/>
				)}
				/>
			</div>
		</Router>
    )
  }
}

export default App;
