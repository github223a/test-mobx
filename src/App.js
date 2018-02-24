import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {

  click = () => {
    this.props.store.increment();
  }

  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.store.counter}</h1>
          <button onClick={this.click}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
