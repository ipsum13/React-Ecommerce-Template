import React from 'react';
import PropTypes from 'prop-types';

const Thumb = (props) => (
  <div className={props.classes}>
    <img src={props.src} alt={props.alt} title={props.title} style={{width: props.width, height: props.height}} /> 
  </div>
  
);

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Thumb;
