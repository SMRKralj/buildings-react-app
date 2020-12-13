import React, { Component } from 'react';
import BuildingItem from './BuildingItem';
import PropTypes from 'prop-types';

class Buildings extends Component {
  render() {
    return this.props.buildings.map((building) => (
      <BuildingItem key={building.id} building={building} markComplete={this.props.markComplete} delBuilding={this.props.delBuilding} />
    ));
  }
}

// PropTypes
Buildings.propTypes = {
  buildings: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delBuilding: PropTypes.func.isRequired,
}

export default Buildings;