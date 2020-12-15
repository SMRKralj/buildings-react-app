import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddBuilding extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    customerId: "",
    customerName: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state.name);
    this.props.addBuilding(this.state.address);
    this.props.addBuilding(this.state.phone);
    this.props.addBuilding(this.state.customerId);
    this.props.addBuilding(this.state.customerName);
    this.setState({
      name: "",
      address: "",
      phone: "",
      customerId: "",
      customerName: "",
    });
  };

  /*onChange = (e) =>
         [e.target.address]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.customerId]: e.target.value,
      [e.target.customerName]: e.target.value,
    });*/

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="name"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add building name ..."
          value={this.state.name}
          onChange={(e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }}
        />
        <input
          type="text"
          name="address"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add building address ..."
          value={this.state.address}
          onChange={(e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }}
        />
        <input
          type="text"
          name="phone"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add building phone ..."
          value={this.state.phone}
          onChange={(e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }}
        />
        <input
          type="text"
          name="customerId"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add building customer id ..."
          value={this.state.customerId}
          onChange={(e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }}
        />
        <input
          type="text"
          name="customerName"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add building customer name ..."
          value={this.state.customerName}
          onChange={(e) => {
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }}
        />
        <input
          type="submit"
          value="Add building"
          className="btn"
          style={{ flex: "1", background: "#193c78" }}
        />
      </form>
    );
  }
}

// PropTypes
AddBuilding.propTypes = {
  addBuilding: PropTypes.func.isRequired,
};

export default AddBuilding;
