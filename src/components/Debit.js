import React, {Component} from 'react';

class Debit extends Component {

  render() {
    const id = this.props.id;
    const description = this.props.description;
    const amount = this.props.amount;
    const date = this.props.date;

    return (
        <div className="product-display">
          <h3>{id}</h3>
          <div>{description}</div>
          <div>{amount}</div>
          <div>{date}</div>

          {this._showOptions()}
        </div>
    );

  }
}

export default Debit;