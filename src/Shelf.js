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
                                coverURL = {book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/150x200'}
                                author = {book.authors}
                                title = {book.title}
                                key = {book.id}
                                id = {book.id}
                                shelf = {this.props.id === 'currentlyReading' ? 'currentlyReading' : 
                                        'wantToRead' ? 'wantToRead' : 
                                        'read' ? 'read' : 'none'}
                            />
                        ))}
                    </div>
                </section>
            </Fragment>        
        )
    }
}

export default Shelf;