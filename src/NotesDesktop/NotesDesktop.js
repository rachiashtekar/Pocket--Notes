import React, { useState } from "react";
import NotesContainer from "./NotesContainer";
import "./NotesDesktop.css";

function NotesDesktop() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const handleGroupClick = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="app-container">
      <div className="group-list">
        <ul>
          {/* Sample list of group names */}
          <li onClick={handleGroupClick}>Group 1</li>
          <li onClick={handleGroupClick}>Group 2</li>
          <li onClick={handleGroupClick}>Group 3</li>
        </ul>
      </div>
      {/* Render NotesContainer only if the side panel is open */}
      {isSidePanelOpen && <NotesContainer />}
    </div>
  );
}

export default NotesDesktop;
