import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page, Header, Body, Footer } from './Page';
import { getAll } from './BooksAPI';
import Shelf from './Shelf';
import './misc.css';

class MainPage extends Component {
    state = {
        allBooks: []
    };

    componentDidMount() {
        getAll().then(( books ) => {
            this.setState({ allBooks: books})
        })
    }

    update = () => {
        getAll().then(( books ) => {
            this.setState({ allBooks: books})
        })
    }

    render() {
        return (
          <Page>
            <Header title="MyReads" />
            <Body>
                <Shelf
                    id = 'currentlyReading' 
                    updateMain = {this.update}
                    shelfName="Currently Reading"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'currentlyReading'
                    ))}
                />
                <Shelf
                    id = 'wantToRead'
                    updateMain = {this.update}
                    shelfName="Want to Read"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'wantToRead'
                    ))}
                />
                <Shelf
                    id = 'read'
                    updateMain = {this.update}
                    shelfName="Have Read"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'read'
                    ))}
                />
                <Link
                    id = 'none'
                    to="/search"
                    className="search-page-btn"
                >Search</Link>
                <Footer content="A FEND Project" />
            </Body>
        </Page>
        );
    }
}

export default MainPage;