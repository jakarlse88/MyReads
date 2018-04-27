import React, { Component } from 'react';
import './App.css';
import Book from './Book';
import { Page, Header, Body, Shelf, Footer } from './Page';
import { get, getAll, update, search } from './BooksAPI';

class App extends Component {
  render() {
    return (
      <Page>
        <Header title="MyReads" />
        <Body>
          <Shelf shelfName="Currently Reading">
            <Book />
            <Book />
            <Book />
          </Shelf>
          <Shelf shelfName="Want to Read">
            <Book />
            <Book />
            <Book />
          </Shelf>
          <Shelf shelfName="Have Read">
            <Book />
            <Book />
            <Book />
          </Shelf>
        </Body>
        <Footer content="A FEND Project" />
      </Page>
    );
  }
}

export default App;
