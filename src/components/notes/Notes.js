import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';

const Notes = ({ notesData }) => {
  const notes = notesData.map(noteData => (
    <Note key={noteData._id} title={noteData.title} body={noteData.body} />
  ));
  return <li>{notes}</li>;
};

Notes.propTypes = {
  notesData: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }))
};

export default Notes;
