import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import { search as bookSearch} from './BooksAPI';
import Shelf from './Shelf'

class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    handleChange = event => {
        this.setState({ query: event.target.value });

        if (this.state.query) {
            bookSearch(this.state.query).then(( books ) => {
                if (books[0].author !== null) {
                    this.updateSearchedBooks(books);
                }
            })
        }
    }

    resetQuery = () => {
        this.setState({ query: '' });
    }

    resetBooks = () => {
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
                    {this.state.searchedBooks.length > 0 && (
                        <Shelf 
                            shelfName="Search results"
                            books={this.state.searchedBooks}
                        />
                    )}
                
            </Fragment>
        )
    }
}

export default Search;