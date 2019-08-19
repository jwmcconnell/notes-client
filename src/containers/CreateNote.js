import React from 'react';

import { createNote } from '../services/notesApi';

import NoteForm from '../components/notes/NoteForm';

class CreateNote extends React.Component {
  state = {
    title: '',
    body: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      .then(note => {
        console.log(note);
      });
  }

  hanldeTitleChange = e => {
    this.setState({ title: e.target.value });
  }

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  }

  render() {
    const { title, body } = this.state;

    return <NoteForm 
      title={title} 
      body={body} 
      handleTitleChange={this.hanldeTitleChange}
      handleBodyChange={this.handleBodyChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default CreateNote;
