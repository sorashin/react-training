import React,{Component} from 'react';
import styles from './../style/Card.css';
import avatar from './../assets/avatar02.png'

class Card extends React.Component {
  constructor(props){
    super();
    this.state={
    };
  }
  handleClick(){

    this.setState({
      title:"state changed!"
    });
  }

  render() {
    this.props={
      title:"薄い財布",
      location:"東京都千代田区外神田１丁目付近",
      notification:"通知オン",
      lasttime:"１時間前",
      avatar:avatar
    };
    console.log(this.props.avatar);
    // debugger
    return (
      <div className={styles.Card}>
        <div className={styles.avatar}>
          <img src={this.props.avatar} alt=""/>
        </div>
        <ul className={styles.contents}>
          <li className={styles.cardTitle}>{this.props.title}</li>
          <li className={styles.cardLocation}>{this.props.location}</li>
          <li className={styles.cardNotification}>{this.props.notification}</li>
        </ul>
        <p className={styles.cardLasttime}>{this.props.lasttime}</p>
      </div>
    );
  }
}
export default Card;
