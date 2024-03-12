import React, { useState, useEffect } from "react";
import "./CreateNotesandPopup.css";

const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

function CreateNotesAndPopup() {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      console.log("Stored Notes:", storedNotes);
      setNotes(storedNotes);
    } catch (error) {
      console.error("Error parsing JSON from local storage:", error);
      // Handle the error, e.g., set notes to an empty array
      setNotes([]);
    }
  }, []);

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const getInitials = (name) => {
    const words = name.split(" ");
    return words.reduce((initials, word) => initials + word[0], "").toUpperCase();
  };

  const handleCreate = () => {
    // Save data to localStorage
    const newNote = {
      groupName,
      selectedColor,
    };

    const updatedNotes = [...notes, newNote];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // Reset form and close it
    setGroupName("");
    setSelectedColor(colors[0]);
    setFormOpen(false);
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      <div>
        <p className="first-line">Pocket Notes</p>
      </div>

      {/* <div className="notes-data">
        {isFormOpen ? (
          <div className="circle-bg">
            <div className="circle" style={{ backgroundColor: selectedColor }}>
              {getInitials(groupName)}
            </div>
          </div>
        ) : null}
      </div> */}

      {isFormOpen && (
        <div className="form-data">
          <div>
            <p>Create New group</p>
          Group Name:  <input placeholder="Enter Group Name..." type="text" value={groupName} onChange={handleInputChange} />
          </div>
          <div>
            <ul className="color-list">
              Choose the colors:
              {colors.map((color, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: color, border: color === selectedColor ? '2px solid #000' : 'none' }}
                  onClick={() => handleColorChange(color)}
                ></li>
              ))}
            </ul>
          </div>
          <div>
            <button onClick={handleCreate}>Create</button>
          </div>
        </div>
      )}

      {/* Displaying saved notes */}
      <div className="saved-notes">
        {/* <p>Saved Notes:</p> */}
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <div className="circle-bg">
                <div className="circle" style={{ backgroundColor: note.selectedColor }}>
                  {getInitials(note.groupName)}
                </div>
              </div>
              <span> {note.groupName}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="create-notes-button">
        <button className="btn" onClick={() => setFormOpen(!isFormOpen)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CreateNotesAndPopup;
