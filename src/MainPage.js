import React, { Component } from 'react';
import { Page, Header, Body, Footer } from './Page';
import { get, getAll, update, search } from './BooksAPI';
import Shelf from './Shelf';

class MainPage extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        haveRead: [],
        allBooks: []
    };

    componentDidMount() {
        getAll().then(( books ) => {
            this.setState({ allBooks: books})
        })
    }

    render() {
        return (
          <Page>
            <Header title="MyReads" />
            <Body>
              <Shelf 
                shelfName="Currently Reading"
                books = {this.state.allBooks}
              />
            </Body>
            <Footer content="A FEND Project" />
        </Page>
        );
    }
}

export default MainPage;