import React,{Component} from 'react';

class ShoppingList extends React.Component {
  constructor(props){
    super();
    this.state={
      title: "default title from state"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      title:"state changed!"
    });
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>props: {this.props.name}</h1>
        <h1>state: {this.state.title}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <button onClick={this.handleClick}>
          click me!!
        </button>
      </div>
    );
  }
}
export default ShoppingList;
