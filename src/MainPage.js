import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page, Header, Body, Footer } from './Page';
import { get, getAll, update, search } from './BooksAPI';
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

    render() {
        return (
          <Page>
            <Header title="MyReads" />
            <Body>
                <Shelf 
                    shelfName="Currently Reading"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'currentlyReading'
                    ))}
                />
                <Shelf
                    shelfName="Want to Read"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'wantToRead'
                    ))}
                />
                <Shelf
                    shelfName="Have Read"
                    books = {this.state.allBooks.filter(( book ) => (
                        book.shelf === 'read'
                    ))}
                />
                <Link
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