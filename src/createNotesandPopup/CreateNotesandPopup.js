// import "./CreateNotesandPopup.css";
// const colors = ["#B38BFA", "#FF79F2", " #43E6FC", "#F19576","#0047FF","#6691FF"];

// function CreateNotesAndPopup() {
//   return (
//     <div className="notes-container">
//       <div className="notes-data">
//         <p className="first-line">Pocket Notes</p>
//       </div>

//       <div className="form-data">
//         <div>
//           <p>create New group</p>
//           Group Name: <input placeholder="Enter Group Name..." type="text" />
//         </div>
//         <div>
    
          
//           <ul className="color-list">
//            choose the colors :  {colors.map((color, index) => (
//               <li key={index} style={{ backgroundColor: color }}></li>
//             ))}
//           </ul>
          
//         </div>
//         <div>
//           <button>Create</button>
//         </div>
//       </div>
//       <div className="create-notes-button">
//         <button className="btn">+</button>
//       </div>
//     </div>
//   );
// }
// export default CreateNotesAndPopup;

// import React, { useState } from "react";
// import "./CreateNotesandPopup.css";
// const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

// function CreateNotesAndPopup() {
//   const [groupName, setGroupName] = useState("");
//   const [selectedColor, setSelectedColor] = useState(colors[0]);
//   const [isFormOpen, setFormOpen] = useState(false);

//   const handleInputChange = (e) => {
//     setGroupName(e.target.value);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleCreate = () => {
//     // Save data to localStorage
//     const noteData = {
//       groupName,
//       selectedColor,
//     };
//     localStorage.setItem("noteData", JSON.stringify(noteData));

//     // Reset form and close it
//     setGroupName("");
//     setSelectedColor(colors[0]);
//     setFormOpen(false);
//   };

//   return (
//     <div className="notes-container">
//       <div className="notes-data">
//         <p className="first-line">Pocket Notes</p>
//       </div>

//       {isFormOpen && (
//         <div className="form-data">
//           <div>
//             <p>Create New group</p>
//             Group Name: <input placeholder="Enter Group Name..." type="text" value={groupName} onChange={handleInputChange} />
//           </div>
//           <div>
//             <ul className="color-list">
//               Choose the colors:
//               {colors.map((color, index) => (
//                 <li
//                   key={index}
//                   style={{ backgroundColor: color, border: color === selectedColor ? '2px solid #000' : 'none' }}
//                   onClick={() => handleColorChange(color)}
//                 ></li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <button onClick={handleCreate}>Create</button>
//           </div>
//         </div>
//       )}

//       <div className="create-notes-button">
//         <button className="btn" onClick={() => setFormOpen(!isFormOpen)}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateNotesAndPopup;

import React, { useState, useEffect } from "react";
import "./CreateNotesandPopup.css";
const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

function CreateNotesAndPopup() {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const handleInputChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
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
      <div className="notes-data">
        <p className="first-line">Pocket Notes</p>
      </div>

      {isFormOpen && (
        <div className="form-data">
          <div>
            <p>Create New group</p>
            Group Name: <input placeholder="Enter Group Name..." type="text" value={groupName} onChange={handleInputChange} />
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

      <div className="create-notes-button">
        <button className="btn" onClick={() => setFormOpen(!isFormOpen)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CreateNotesAndPopup;
