import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  justifyContent: 'center',
};

function ProLoader() {
  return (
    <PropagateLoader
    color="#4338ca"
    cssOverride={override}
    loading
    size={40}
    speedMultiplier={0.8}
  />
  
  )
}

export default ProLoader
