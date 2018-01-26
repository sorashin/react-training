import React,{Component} from 'react';
import '../style/Card.css';
import avatar from './../assets/avatar02.png'

class Card extends React.Component {
  constructor(props){
    super();
    this.data={
      title:"薄い財布",
      location:"東京都千代田区外神田１丁目付近",
      notification:"通知オン",
      lasttime:"１時間前",
      avatar:avatar
    };
    this.state={
    };
  }
  handleClick(){

    this.setState({
      title:"state changed!"
    });
  }

  render() {
    console.log(this.data.avatar);
    // debugger
    return (
      <div className="Card">
        <div className="card-avatar">
          <img src={this.data.avatar} alt=""/>
        </div>
        <ul className="card-contents">
          <li className="card-title">{this.data.title}</li>
          <li className="card-location">{this.data.location}</li>
          <li className="card-notification">{this.data.notification}</li>
        </ul>
        <p className="card-lasttime">{this.data.lasttime}</p>
      </div>
    );
  }
}
export default Card;
