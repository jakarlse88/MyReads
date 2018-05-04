/* Dropdown menu functionality from
 * https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
 */

import React, { Component } from 'react';
import './book.css';
import { update } from './BooksAPI';

class Book extends Component {

    addToShelf = ( name, shelf ) => {
        console.log(name);
        update( name, shelf )
        .then(( response ) => console.log('updated', response))

        this.props.updateMain();
        
    }

    render() {
        return (
            <article className="book">
                <figure>
                    {this.props.coverURL && (
                        <img src={this.props.coverURL} alt="book cover" />
                    )}
                    <div className="select-container-container">
                        <div className="select-container">
                            <select
                                onChange={e => e.preventDefault()} // quit whining, React
                                value = {this.props.shelf}>
                                <option disabled>Move to:</option>
                                <option
                                    value="currentlyReading"
                                    onClick={() => 
                                        this.addToShelf({ id: this.props.id }, 'currentlyReading')}>
                                    Currently Reading
                                </option>
                                <option
                                    value="wantToRead"
                                    onClick={() => 
                                        this.addToShelf({ id: this.props.id }, 'wantToRead')}>
                                    Want to Read
                                    </option>
                                <option
                                    value="read"
                                    onClick={() => 
                                        this.addToShelf({ id: this.props.id }, 'read')}>
                                    Have Read
                                </option>
                                <option
                                    value="none"
                                    onClick={() => 
                                        this.addToShelf({ id: this.props.id }, 'none')}>
                                    None
                                </option>
                            </select> 
                        </div>
                    </div>
                    <figcaption>
                        {this.props.title && (<p className="book-title">
                            {this.props.title}
                        </p>)}
                        {this.props.author && (
                            <div className="book-author">
                                {this.props.author.map(( author ) => (
                                    <p key={author}>{author}</p>
                                ))} 
                            </div>
                        )}  
                    </figcaption>    
                </figure>
            </article>
        )
    }
}

export default Book;