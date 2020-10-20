import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state={
    username: "peter"
  }

  usernameChangedHandler=(event)=>{
    this.setState({username:event.target.value});
  }


  render() {
    return (
      <div>
      <UserInput changed={this.usernameChangedHandler}
       currentName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="max"/>
        
      </div>
    );
  }
}

export default App;
