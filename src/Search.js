import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import escapeRegExp from 'escape-string-regexp';
import { Debounce } from 'react-throttle';

class Search extends Component {
    state = {
        query: '',
        books: [],
    }

    updateQuery = query => {
        this.setState({ query: query });
        const newQuery  = this.state.query.trim();
        
        if (!newQuery) {
            this.setState({
                books: []
            });
        } else {
            BooksAPI.search(newQuery).then(
                response => {
                    console.log(response);
                    if (response.error) {
                        console.log('error', response);
                    } else {
                        if (query === this.state.query) {
                            this.updateBooks(response);
                        }
                    }
                }
            ).catch(err => {
                console.log('error', err);
            })
        }
    }

    /*
     * https://github.com/keyvhinng/myreads/blob/master/src/SearchPage.js
     */
    updateBooks = books => {
        const updatedBooks = books.map( book => {
            book.shelf = 'none';
            
            this.props.shelvedBooks.forEach(shelvedBook => {
                if (book.id === shelvedBook.id) {
                    book.shelf = shelvedBook.shelf;
                }
            });
            return book;
        });
        this.setState({
            books: updatedBooks
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        let showingBooks;

        if (this.state.books) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingBooks = this.state.books.filter(book => match.test(book.title));
        } else {
            showingBooks = [];
        }

        return (
            <Fragment>
                <section className="search-books-container">
                    <Link
                        to="/"
                        className="search-return-arrow" 
                    >&lt;</Link>
                    <div className="search-books">
                        <Debounce time="400" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by book title or author name"
                                onChange={event => this.updateQuery(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </section>
                <section className="search-shelf">    
                    {showingBooks.length > 0 && (
                        <Shelf 
                            updateMain = {this.props.updateMain}
                            shelfName = "Search results"
                            books = {showingBooks}
                            comparison = {this.props.books}
                        />
                    )}
                    {showingBooks.length < 1 && (
                        <h3 className="no-results-header">
                            No results
                        </h3>
                    )}
                </section>
            </Fragment>
        )
    }
}

export default Search;