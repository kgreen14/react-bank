import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const debitListString = this.props.debits.map(function (x) {
    return (x);
})

class DebitList extends Component {
  render() {
    return (
        <div>
          <h1>Debits</h1>
          
          Balance: {debitListString}
        </div>
    );
  }
}

export default DebitList;
