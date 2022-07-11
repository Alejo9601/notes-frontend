const createNewNote = (newNote) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  };
  return fetch(`http://localhost:3001/api/notes`, options).then((res) =>
    res.json()
  );
};

export default createNewNote;
