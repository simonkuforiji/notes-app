import React, { useState } from "react";
import NotesIcon from '@material-ui/icons/Notes';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [showAdd, setShowAdd] = useState(false);


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleInput(){
    setShowAdd(true);
  }

  return (
    <div>
      <form className="create-note">
      {showAdd &&
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleInput}
          value={note.content}
          placeholder="Take a note..."
          rows={showAdd ? "3" : "1"}
        />
        <Zoom in={showAdd}>
          <Fab onClick={submitNote}>
            <NotesIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
