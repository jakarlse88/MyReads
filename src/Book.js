/* Dropdown menu functionality from
 * https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
 */

import React, { Component } from 'react';
import './book.css';
import { update } from './BooksAPI';

class Book extends Component {
    state = {
        showMenu: false
    };

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(event) {
        if (this.dropdownMenu &&
            !this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    addToShelf = ( name, shelf ) => {
        console.log(name);
        update( name, shelf )
        .then(( response ) => console.log('updated', response))

        if (this.props.updateMain) {
            this.props.updateMain();
        }
    }
    
    showMenu = this.showMenu.bind(this);
    closeMenu = this.closeMenu.bind(this);

    render() {
        return (
            <article className="book">
                <figure>
                    {this.props.coverURL && (
                        <img src={this.props.coverURL} alt="book cover" />
                    )}
                    <div className="book-dropbtn-container">
                        <button 
                            className="book-dropbtn"
                            onClick={this.showMenu}
                        >+</button>
                        {this.state.showMenu && ( 
                            <div 
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button disabled>Move to:</button>
                                <button
                                    onClick={() => 
                                    this.addToShelf({ id: this.props.id }, 'currentlyReading')}>
                                    Currently Reading
                                </button>
                                <button
                                    onClick={() => 
                                    this.addToShelf({ id: this.props.id }, 'wantToRead')}>
                                    Want to Read
                                    </button>
                                <button
                                    onClick={() => 
                                    this.addToShelf({ id: this.props.id }, 'read')}>
                                    Have Read
                                </button>
                                <button
                                    onClick={() => 
                                    this.addToShelf({ id: this.props.id }, 'none')}>
                                    None
                                </button>
                            </div> 
                            )
                        }
                    </div>
                    <figcaption>
                        {this.props.title && (<p className="book-title">
                            {this.props.title}
                        </p>)}
                        {this.props.authors && (
                            <div className="book-author">
                                {this.props.authors.map(( author ) => (
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
