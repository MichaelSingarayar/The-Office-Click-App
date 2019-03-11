import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Counter from "./components/Counter";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      
     <header>
     <Header />
     </header>
     <main>
       <Counter />
     </main>
     
    

     </>
    );
  }
}

export default App;
