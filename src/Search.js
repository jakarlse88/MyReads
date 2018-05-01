import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import { search as bookSearch} from './BooksAPI';
import Shelf from './Shelf';

class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    handleChange = event => {
        this.setState({ query: event.target.value });
        const { query } = this.state;

            if (query) {
                bookSearch(query).then(
                    response => {
                        if (response.error) {
                            this.resetSearchedBooks();
                        } else {
                            this.updateSearchedBooks(response);
                    }
                })
            } else if (query === '') {
                this.resetSearchedBooks();
            }
    }

    resetQuery = () => {
        this.setState({ query: '' });
    }

    resetSearchedBooks = () => {
        this.setState({ searchedBooks: [] });
    }

    updateSearchedBooks = books => {    
        this.setState({ searchedBooks: books });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <section className="search-books-container">
                    <Link
                        to="/"
                        className="search-return-arrow" 
                    >&lt;</Link>
                    <form onSubmit={this.handleSubmit} className="search-books">
                        <input
                            type="text"
                            placeholder="Search by book title or author name"
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                    </form>
                </section>
                <section className="search-shelf">    
                    {this.state.searchedBooks.length > 0 && (
                        <Shelf 
                            shelfName="Search results"
                            books={this.state.searchedBooks}
                        />
                    )}
                    {this.state.searchedBooks.length <= 1 && (
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