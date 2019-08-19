import React from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ 
  title,
  handleTitleChange,
  body,
  handleBodyChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      </label>
      <label>Body:
        <textarea 
          name="text" 
          placeholder="Body"
          value={body}
          id="text" 
          cols="30" 
          rows="10" 
          onChange={handleBodyChange}
        ></textarea>
      </label>
      <button>Submit</button>
    </form>
  );
};

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
