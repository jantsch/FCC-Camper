import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Toggle from 'react-bootstrap-toggle';


class App extends Component {
  constructor() {
    super();
    this.state = { recentActive: true };
   
  }
  onToggle = () =>  {this.setState({ recentActive: !this.state.recentActive }); console.log(!this.state.recentActive);};
 
  render() {
    return (
      <div className="App">
          <div className="App-header">     
            <h2>FCC - Camper Leaderboard</h2>
          </div> 
          <div className="btn-state">      
              <Toggle    onClick={this.onToggle}   on={<h2>Recent</h2>}   off={<h2>All Time</h2>}   size="md"   offstyle="danger" active={this.state.recentActive}/>
          </div>
          <Table  recent={this.state.recentActive}/>
      </div>
    );
  }
}

export default App;
