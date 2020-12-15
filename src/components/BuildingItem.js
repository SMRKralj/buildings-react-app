import React, { Component } from "react";
import PropTypes from "prop-types";

export class BuildingItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const {
      id,
      name,
      address,
      phone,
      customerId,
      customerName,
    } = this.props.building;

    return (
      <div className="container" style={this.getStyle()}>
        <p>
          {name} {address} {phone} {customerId}
          {customerName}
          <button
            style={btnStyleDel}
            onClick={this.props.delBuilding.bind(this, id)}
          >
            X
          </button>
          <button style={btnStyleEdit}>Edit</button>
        </p>
      </div>
    );
  }
}

// PropTypes
BuildingItem.propTypes = {
  building: PropTypes.object.isRequired,
  delBuilding: PropTypes.func.isRequired,
};
const btnStyleEdit = {
  background: "#193c78",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
const btnStyleDel = {
  background: "#dc8a2a",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default BuildingItem;
