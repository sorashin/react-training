import React,{Component} from 'react';
import Card from './Card';
import '../style/Cards.css';


class Cards extends React.Component {
  constructor(props){
    super();
    this.state={

    };
    this.data={
      "title":"101号室",
      "headicon":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    }
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
          <div className="cards-head-icon"><img src={this.data.headicon}/></div>
          <h1 className="cards-head-title">{this.data.title}</h1>
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
