import React,{Component} from 'react';
import './Card.css';


class Card extends React.Component {
  constructor(props){
    super();
    this.state={

    };
    this.data={"title":"default title",
      "location":"default location",
      "notification":"default notification",
      "lasttime":"default lasttime",
      "image":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
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
      <div className="Card">
        <div className="card-avatar">
          <img src={this.data.image}/>
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
