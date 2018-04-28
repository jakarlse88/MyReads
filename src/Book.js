/* Dropdown menu functionality from
 * https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
 */

import React, { Component } from 'react';
import './book.css';

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
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
    
    showMenu = this.showMenu.bind(this);
    closeMenu = this.closeMenu.bind(this);

    render() {
        return (
            <article className="book">
                <figure>
                    <img src={this.props.coverURL} alt="book cover" />
                    <div className="book-dropbtn-container">
                        <button 
                            className="book-dropbtn"
                            onClick={this.showMenu}
                        >+</button>
                        {this.state.showMenu ? ( 
                            <div 
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button>Move to:</button>
                                <button>Currently Reading</button>
                                <button>Want to Read</button>
                                <button>Have Read</button>
                                <button>None</button>
                            </div> 
                            ) 
                            : (
                                null
                            )
                        }
                    </div>
                    <figcaption>
                        <p className="book-title">
                            {this.props.title}
                        </p>
                        <div className="book-author">
                            {this.props.author.map(( author ) => (
                                <p key={author}>{author}</p>
                            ))}
                        </div>
                    </figcaption>    
                </figure>
            </article>
        )
    }
}

export default Book;
