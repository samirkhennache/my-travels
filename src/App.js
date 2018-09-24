import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Samir KHENNACHE</h1>
        </header>
        <Travel
        image = "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
        caracter = "New York"
        city = "New York"
        country = "USA"
        distance = "5834"
        />
         <Travel
        image = "https://fifty-wp.s3.amazonaws.com/detours/uploads/2018/03/Barcelone-super-block-800x480.png"
        caracter = "Barcelone"
        city = "Barcelone"
        country = "Espagne"
        distance = "1033"
        />
         <Travel
        image = "https://img.ev.mu/images/villes/6856/1605x642/6856.jpg"
        caracter = "Rome"
        city = "Rome"
        country = "Italie"
        distance = "1416"
        />
      </div>
    );
  }
}

export default App;
