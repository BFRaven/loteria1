import React, { Component } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";

// Function to randomly shuffle the image cards

function randomImg (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  return arr;
};





class App extends Component {

  state = {
    images,
    score: 0,
    highScore: 0,
    clickArr: [],
    winLose: ""


  };

  // Starting the game; to prevent refresh adding preventDefault method.
  beginGame= event => {
    event.preventDefault()
      console.log('Begin Game')
      this.setState({
        ready: true
      })
  };

handleRandomImg = () =>{
  // handles the shuffle of the cards
  let randomIm = randomImg(images);
  this.setState({ 
    images: randomIm
  });
};

// This method handles adding plus one to score whenever player clicks card correct.

handlePosScore = () => {
const score1 = this.state.score + 1;
  this.setState({
    score: score1,
    winLose: ""
  });
  if(score1 > this.state.highScore) {
    this.setState({
      highScore: score1,
      winLose: "You Won!",
      ready: false
    });
  }
  else if(score1 > this.state.highScore) {
    this.setState({score1: this.state.highScore});
  }
  this.handleRandomImg();
};
handleResetGame = () =>{
  this.setState({
    score: 0,
    highScore: this.state.highScore,
    winLose: "You Lost!",
    clickArr: [],
    ready: false
  });
  this.handleRandomImg();
};
// this function handles the clicking of the cards
handleOnClick = id => {
  if(this.state.clickArr.indexOf(id) === -1) {
    this.handlePosScore();
    this.setState({ clickArr: this.state.clickArr.concat(id)});
  } else {
    this.handleResetGame();
  }
  this.handleRandomImg();
};
 
  render() {
    return (
      <Wrapper> 
        <Nav 
        title="Loteria"
        winLose={this.state.winLose}
        score={this.state.score}
        highScore={this.state.highScore}
        />
      <Title> La Loteria! Click every image of the iconic Mexican bingo only once! Otherwise it's Game Over... </Title>
        {this.state.images.map(cardz => (
          <ImageCard
          key={cardz.id}
          id={cardz.id}
          name={cardz.name}
          image={cardz.image}
          handleOnClick={this.handleOnClick}
          handlePosScore={this.handlePosScore}
          handleResetGame={this.handleResetGame}
          />
        ))}
    </Wrapper>
    );
  }
}

export default App;
