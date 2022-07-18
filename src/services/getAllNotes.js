const getAllNotes = () => {
  return fetch("https://pure-harbor-09905.herokuapp.com/api/notes").then(
    (res) => res.json()
  );
};

export default getAllNotes;
