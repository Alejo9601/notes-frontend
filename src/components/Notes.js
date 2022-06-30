import notes from "../assets/notas_prueba.json";
import Note from "./Note";

const Notes = () => {
  return (
    <ol>
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          content={note.content}
          date={note.date}
          important={note.important}
        />
      ))}
    </ol>
  );
};

export default Notes;
