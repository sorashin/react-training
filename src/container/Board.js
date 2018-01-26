import React, { Component } from 'react';
import styles from './../style/Board.css';
import Cards from './Cards';



class Board extends Component {
  render() {
    var cardsList = [];
    var cardsData = [0,1,2,3,4,5,6]
    for(var i in cardsData){
      cardsList.push(<Cards/>);
    }
    return (
        <div className={styles.Board}>
          <ul className={styles.wrap}>
            {cardsList}
          </ul>
        </div>
    );
  }
}

export default Board;
