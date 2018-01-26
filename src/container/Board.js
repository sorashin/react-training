import React, { Component } from 'react';
import './../style/Board.css';
import Cards from './Cards';



class Board extends Component {
  render() {
    var cardsList = [];
    var cardsData = [0,1,2,3,4,5,6]
    for(var i in cardsData){
      cardsList.push(<Cards/>);
    }
    return (
        <ul className="Board">
          {cardsList}
        </ul>
    );
  }
}

export default Board;
