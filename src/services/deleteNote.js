const deleteNote = (noteId) => {
  const options = {
    method: "DELETE",
  };
  return fetch(
    `https://pure-harbor-09905.herokuapp.com/api/notes/${noteId}`,
    options
  ).then((res) => res.ok);
};

export default deleteNote;
