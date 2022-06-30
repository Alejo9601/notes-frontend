const Note = ({ id, content, date, important }) => {
  return (
    <li>
      <span>{id}</span>
      <span>{content}</span>
      <span>{date}</span>
      <span>{important}</span>
    </li>
  );
};

export default Note;
