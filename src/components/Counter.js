import Container from "./Container";
import React from "react";
import NavBar from "./Navbar";

class Counter extends React.Component  {
    // Setting the initial state of the Counter component
    state = {
      score: 0,
      topScore: 0
    };
  
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
      console.log("Got clicked!!!!");
      
    };


  
    
  
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <>
        <nav>
          <NavBar score= {this.state.score} />
        </nav>
        <div className="img">
        <Container handleClick= {this.handleIncrement} />
        </div>
        </>
      );
    }
  }
  
  export default Counter;