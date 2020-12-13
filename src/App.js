import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';

import buildings from './mocks/buildings'

import './App.css';

class App extends Component {
  state = {
    buildings: buildings,
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <button color="primary" onClick={e=>{this.show();}}  >Add new building</button>
            <br /> <br />
            <table>
              <thead>
                <tr align="center">
                  <th>Building</th>
                  <th>Address</th>
                  <th>Customer</th>
                  <th>Installed Boilers</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddBuilding addBuilding={this.addBuilding} />
                  <Buildings
                    buildings={this.state.buildings}
                    delBuilding={this.delBuilding}
                  />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
