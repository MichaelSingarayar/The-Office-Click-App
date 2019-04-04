import React, { Component } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Header from '../src/components/Header/Header';
import Item from '../src/components/Item/Item';
import Footer from '../src/components/Footer/Footer';
import Office from "./office.json";
import './App.css';

class App extends Component {
  // Setting the initial state of the App component
  constructor(){
    super()

    this.handleShuffleChararcters = this.handleShuffleChararcters.bind(this)
  }

  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click an image to begin!",
    messageClass: "",
    Office: Office
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleCorrectSelection = () => {
    
    if (this.state.score+1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore+1})
    }
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score+1, message: "Congrats! You win!", messageClass:"correct"})
    }else{
      this.setState({score: this.state.score+1, message: "You guessed correctly!", messageClass:"correct"})
    }
  }

  handleResetWin = (currentOffice) => {
    //if current score is at max reset score to 0 and topscore to 0
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      //reset clicked state for Office
      const updatedOffice = currentOffice.map(ch => (true) ? { ...ch, isClicked: false } : ch)
      return updatedOffice
    }else{
      return currentOffice
    }
  }

  handleIncorrectSelection = () => {
    //incorrect selection made, reset score to 0
    this.setState({score: 0, message: "You guessed incorrectly!"})
    //reset clicked state for Office
    const updatedOffice = this.state.Office.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
    return updatedOffice
  }


  handleShuffleChararcters = (name) => {
    // this.handleResetWin();
    var resetNeeded = false;
    const Office = this.state.Office.map(ch => {
      //ch.name === name ? { ...ch, isClicked: true } : ch
      if(ch.name === name) {
        if (ch.isClicked === false) {
          this.handleCorrectSelection()
          return { ...ch, isClicked: true}
        }else{
          resetNeeded = true
          return { ...ch, isClicked: false}
        }
      }
      return ch
    })

    if (resetNeeded) {
      this.setState({
        Office: this.shuffle(this.handleIncorrectSelection()),
        messageClass:"incorrect"
      })
      
    }else{
      //check if game is won before rendering Office
      this.setState({ Office: this.shuffle(this.handleResetWin(Office)) })
    }
    
  }

  handleRenderOffice = () => {
    return this.state.Office.map((character) =>
            <Item 
              image={character.image} 
              name={character.name} 
              key={character.id} 
              onClick={this.handleShuffleChararcters} 
            />
          );
  }

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        <Header />
        <div className="content">
          {this.handleRenderOffice()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
