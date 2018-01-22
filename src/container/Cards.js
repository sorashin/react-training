import React,{Component} from 'react';
import Card from './Card';
import './Cards.css';


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
    return (
      <div className="Cards">
        <div className="cards-head">
          <div className="cards-head-icon"><img src={this.props.iconsrc}/></div>
          <h1 className="cards-head-title">{this.props.title}</h1>
          <p className="cards-head-option"></p>
        </div>
        <div className="cards-wrap">
          <Card title="default title from state" location="default location" lasttime="数分前" image="../container/assets/images/avatar01.png" notification="通知オフ"/>
        </div>
      </div>
    );
  }
}
export default Cards;
