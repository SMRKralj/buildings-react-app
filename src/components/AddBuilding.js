import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddBuilding extends Component {
  state = {
    name: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state.name);
    this.setState({ name: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
      
      </form>
    );
  }
}

// PropTypes
AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
};

export default AddBuilding;
