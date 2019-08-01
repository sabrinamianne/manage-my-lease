import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import List from './List';

function ApartmentDetails(props){
  return (
    <div>
      {props.selectedApt}
    </div>
  );
}

ApartmentDetails.propTypes = {
  selectedApt: PropTypes.object
};

export default ApartmentDetails;
