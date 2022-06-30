import notes from "../assets/notas_prueba.json";
import Note from "./Note";

const Notes = () => {
  return (
    <ol>
      {notes.map((note, index) => (
        <Note key={index} content={note.content} date={note.date} />
      ))}
    </ol>
  );
};

export default Notes;
