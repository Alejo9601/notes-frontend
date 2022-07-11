const deleteNote = (noteId) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3001/api/notes/${noteId}`, options).then(
    (res) => res.ok
  );
};

export default deleteNote;
