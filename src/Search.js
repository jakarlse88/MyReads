import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';
import './search.css';

class Search extends Component {
    render() {
        return (
            <section className="search-books-container">
                <Link
                    to="/"
                    className="search-return-arrow" 
                >&lt;</Link>
                <input
                    className="search-books"
                    type="text"
                    placeholder="Search..."
                />
            </section>
        )
    }
}

export default Search;