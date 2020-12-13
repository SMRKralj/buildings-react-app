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
    const { name, address, customerName , boilersInstalled } = this.props.building;
    return (
      <div className='container' style={this.getStyle()}>
                 
        <table>
          <tbody>
               <tr align='left'>
              <td>{name}</td>
              <td>{address}</td>
              <td>{customerName}</td>
                <td>{toString(boilersInstalled)}</td>
                <td>
                  <button align="right" color="primary">Edit</button>
                  {}
                  <button align="right" color="red">Delete</button>
                </td>
              </tr>
     
          </tbody>
        </table>
      </div>
    );
  }
}

// PropTypes
BuildingItem.propTypes = {
  building: PropTypes.object.isRequired,
  delBuilding: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default BuildingItem;
