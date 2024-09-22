import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api/api';
import decodeJwt from './api/jwt';


class App extends React.Component {
  login = async () => {
    try {
      const res = await api.post('/auth/login', {
        email: 'admin@jourhney.com',
        password: 'myVerry$tro91Zc8aBRsWnGp3wo*%rd',
      });
      console.log('Login successful:', res.data);
      // const res = await api.get('/');
      // console.log('Login successful:', res.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.login}>Download File</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
