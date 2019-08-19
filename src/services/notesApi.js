export const createNote = (title, body) => {
  return fetch('http://localhost:7891/api/v1/notes', {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not save note';

      return res.json();
    });
};

export const fetchNotes = () => {
  return fetch('http://localhost:7891/api/v1/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not get notes';

      return res.json();
    });
};
