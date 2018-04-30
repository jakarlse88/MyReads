import React, { Component, Fragment } from 'react';
import Book from './Book';

class Shelf extends Component {
    render() {
        return (
            <Fragment>
                <section className="shelf-container">
                    <h2 className="shelf-header">{this.props.shelfName}</h2>
                    <div className="book-shelf">
                        {this.props.books.map(( book ) => (
                            <Book 
                                updateMain = {this.props.updateMain}
                                coverURL = {book.imageLinks.thumbnail}
                                author = {book.authors}
                                title = {book.title}
                                key = {book.id}
                                id = {book.id}
                            />
                        ))}
                    </div>
                </section>
            </Fragment>        
        )
    }
}

export default Shelf;