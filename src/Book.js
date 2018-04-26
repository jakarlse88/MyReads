import React, { Component } from 'react';
import './book.css';

class Book extends Component {
    render() {
        return (
            <article class="book">
                <figure>
                    <img src="http://via.placeholder.com/200x275" alt="book cover" />
                    <figcaption>
                        <p class="book-title">Book Title</p>
                        <p class="book-author">Book Author</p>
                    </figcaption>    
                </figure>
            </article>
        )
    }
}

export default Book;