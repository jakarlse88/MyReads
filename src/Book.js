import React, { Component } from 'react';
import './book.css';

class Book extends Component {
    render() {
        return (
            <article className="book">
                <figure>
                    <img src="http://via.placeholder.com/200x275" alt="book cover" />
                    <button className="book-control">+</button>
                    <figcaption>
                        <p className="book-title">Book Title</p>
                        <p className="book-author">Book Author</p>
                    </figcaption>    
                </figure>
            </article>
        )
    }
}

export default Book;