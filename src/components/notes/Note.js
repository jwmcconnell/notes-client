import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ title, body }) => {
  return (
    <li>
      <h6>{title}</h6>
      <p>{body}</p>
    </li>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
