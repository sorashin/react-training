import React,{Component} from 'react';
import Card from './Card';
import styles from './../style/Cards.css';
import headicon from'./../assets/gateway_thumb.png';


class Cards extends React.Component {
  constructor(props){
    super();
    this.state={

    };
  }
  handleClick(){
    debugger
    this.setState({
      title:"state changed!"
    });
  }
  render() {
    this.props={
      title:"101号室",
      headicon:headicon
    };
    var cardList = [];
    var cardData = [0,1,2,3,4,5,6]
    for(var i in cardData){
      cardList.push(<li><Card/></li>);
    }

    return (
      <li className={styles.Cards}>
        <div className={styles.head}>
          <div className={styles.headIcon}><img src={this.props.headicon}/></div>
          <h1 className={styles.headTitle}>{this.props.title}</h1>
          <p className={styles.headOption}></p>
        </div>
        <ul className={styles.wrap}>
          {cardList}
        </ul>
      </li>
    );
  }
}
export default Cards;
