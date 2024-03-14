// import React, { useState } from 'react';
// import './App.css';
// import Home from './Home/Home';
// import CreateNotesAndPopup from './createNotesandPopup/CreateNotesandPopup';

// function App() {
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   const handleGroupSelect = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div>
//       <CreateNotesAndPopup onGroupSelect={handleGroupSelect} />
//       <Home selectedGroup={selectedGroup} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import CreateNotesAndPopup from './createNotesandPopup/CreateNotesandPopup';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="app-container">
      <CreateNotesAndPopup onGroupSelect={handleGroupSelect} />
      <Home selectedGroup={selectedGroup} />
    </div>
  );
}

export default App;
