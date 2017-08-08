import React, {Component} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import DebitList from './components/DebitList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: []
    }
  }
_getDebits = () => {
  axios.get('http://localhost:4000/debits')
    .then((res) => {
      const debits = res.data;
      this.setState({debits})
    })
}

_getCredits = () => {
  axios.get('http://localhost:4000/credits')
  .then((res) => {
      const credits = res.data;
      this.setState({credits})
    })
  }

_calculateAccountBalance = () => {
  const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
    return totalCredits + credit.amount
  }, 0)


  const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
    return totalDebits + debit.amount
  }, 0)
  
  return totalCredits - totalDebits;
}

componentWillMount () {
  this._getCredits();
  this._getDebits();
}

  render() {

    const accountBalance = this._calculateAccountBalance();
    const debits = this.state.debits;

    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);
    const DebitComponent = () => (<Debit debit={debit}/>);
    const DebitListComponent = () => (<DebitList debits={debits}/>);
    const UserProfileComponent = () => (
        <UserProfile 
          userName={this.state.currentUser.userName} 
          memberSince={this.state.currentUser.memberSince}  />
    
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debitList" render={DebitListComponent}/>
            <Route exact path="/debit" render={DebitComponent}/>

          </div>
        </Router>
    );
  }

}

export default App;