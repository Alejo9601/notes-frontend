const createNewNote = (newNote) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  };
  return fetch(
    `https://pure-harbor-09905.herokuapp.com/api/notes`,
    options
  ).then((res) => res.json());
};

export default createNewNote;
