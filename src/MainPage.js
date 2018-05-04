import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page, Header, Body, Footer } from './Page';
import Shelf from './Shelf';
import './misc.css';

class MainPage extends Component {
    render() {
        return (
          <Page>
            <Header title="MyReads" />
            <Body>
                <Shelf
                    id = 'currentlyReading' 
                    updateMain = {this.props.updateMain}
                    shelfName="Currently Reading"
                    books = {this.props.books.currentlyReading}
                />
                <Shelf
                    id = 'wantToRead'
                    updateMain = {this.props.updateMain}
                    shelfName="Want to Read"
                    books = {this.props.books.wantToRead}
                />
                <Shelf
                    id = 'read'
                    updateMain = {this.props.updateMain}
                    shelfName="Have Read"
                    books = {this.props.books.read}
                />
                <Link
                    id = 'none'
                    to="/search"
                    className="search-page-btn"
                >
                    Search
                </Link>
                <Footer content="A FEND Project" />
            </Body>
        </Page>
        );
    }
}

export default MainPage;