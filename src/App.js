import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Buildings from "./components/Buildings";
import AddBuilding from "./components/AddBuilding";
import buildings from "./mocks/buildings";

import "./App.css";

class App extends Component {
  state = {
    buildings: buildings,
  };

  // Add Building
  addBuilding = (name, address, phone, customerId, customerName) => {
    const newBuilding = {
      name,
     /* address,
      phone,
      customerId,
      customerName,
      id: Math.floor(Math.random() * 101),*/
    };

    this.setState({ buildings: [...this.state.buildings, newBuilding] });
  };

  // Delete Building
  delBuilding = (id) => {
    this.setState({
      buildings: [
        ...this.state.buildings.filter((building) => building.id !== id),
      ],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
                       
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
