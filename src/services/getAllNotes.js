const getAllNotes = () => {
  return fetch("http://localhost:3001/api/notes").then((res) => res.json());
};

export default getAllNotes;
