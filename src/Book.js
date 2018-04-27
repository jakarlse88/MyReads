import React, { Component } from 'react';
import './book.css';

class Book extends Component {
    render() {
        return (
            <article className="book">
                <figure>
                    <img src={this.props.coverURL} alt="book cover" />
                    <button className="book-control">+</button>
                    <figcaption>
                        <p className="book-title">
                            {this.props.title}
                        </p>
                        <div className="book-author">
                            {this.props.author.map(( author ) => (
                                <p>{author}</p>
                            ))}
                        </div>
                    </figcaption>    
                </figure>
            </article>
        )
    }
}

export default Book;
