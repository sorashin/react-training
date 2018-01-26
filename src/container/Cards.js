import React,{Component} from 'react';
import Card from './Card';
import '../style/Cards.css';
import headicon from'../assets/gateway_thumb.png';


class Cards extends React.Component {
  constructor(props){
    super();
    this.state={

    };
    this.data={
      title:"101号室",
      headicon:headicon
    };
  }
  handleClick(){
    debugger
    this.setState({
      title:"state changed!"
    });
  }
  render() {
    var cardList = [];
    var cardData = [0,1,2,3,4,5,6]
    for(var i in cardData){
      cardList.push(<li><Card/></li>);
    }

    return (
      <li className="Cards">
        <div className="cards-head">
          <div className="cards-head-icon"><img src={this.data.headicon}/></div>
          <h1 className="cards-head-title">{this.data.title}</h1>
          <p className="cards-head-option"></p>
        </div>
        <ul className="cards-wrap">
          {cardList}
        </ul>
      </li>
    );
  }
}
export default Cards;
