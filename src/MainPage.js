import React, { Component } from 'react';
import { Page, Header, Body, Footer } from './Page';
import { get, getAll, update, search } from './BooksAPI';
import Shelf from './Shelf';

class MainPage extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        haveRead: [],
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
                <Footer content="A FEND Project" />
            </Body>
        </Page>
        );
    }
}

export default MainPage;