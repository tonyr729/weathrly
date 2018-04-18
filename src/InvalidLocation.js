import React from 'react';

const InvalidLocation = ({ validLocation }) => {
  let locationError = null;

  if (!validLocation) {
    locationError = <p className="location-error">*Location not found</p>
  }

  return locationError;
}

export default InvalidLocation;