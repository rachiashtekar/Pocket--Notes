import React, { useState, useEffect } from "react";
import "./Home.css";
import lock from "../Assets/lock.png";
import image1 from "../Assets/image1.png";
import vector from "../Assets/Vector.png";
import { getInitials } from "../Utils";

function Home({ selectedGroup }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks for the selected group from local storage on component mount
  useEffect(() => {
    const storedTasks =
      JSON.parse(localStorage.getItem(selectedGroup?.groupName)) || [];
    setTasks(storedTasks);
  }, [selectedGroup]);

  // Update local storage when tasks change
  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem(selectedGroup.groupName, JSON.stringify(tasks));
    }
  }, [tasks, selectedGroup]);

  // Handle task input change
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  // Handle adding a task
  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { text: task, time: new Date().toLocaleString() };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  return (
    <div
      className={`big-container ${
        selectedGroup ? "selected-group" : "no-selected-group"
      }`}
    >
      <div className="main-container">
        <div className="container">
          {/* Render the desktop image only if there's no selected group */}
          {!selectedGroup && (
            <img className="desktop-image" src={image1} alt="desktop" />
          )}
        </div>
        <div className="data">
          {/* Render the selected group's title if a group is selected */}
          {selectedGroup && (
            <div className="group-heading">
              <div
                className="initials-circle"
                style={{ backgroundColor: selectedGroup.selectedColor }}
              >
                {getInitials(selectedGroup.groupName)}
              </div>
              <h1 className="group-name">{selectedGroup.groupName}</h1>
            </div>
          )}
          <div>
            {!selectedGroup && (
              <div>
                <h1
                  style={{ position: "relative", top: "6px" }}
                  className="heading"
                >
                  Pocket Notes
                </h1>
                <p
                  style={{ position: "relative", top: "20px" }}
                  className="paragraph"
                >
                  Send and receive messages without keeping your phone online.
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
                <p style={{ marginTop: "280px" }}>
                  <img src={lock} alt="lock" /> end-to-end encrypted
                </p>
              </div>
            )}
          </div>
          {/* Render tasks */}
          {selectedGroup && (
            <>
              <div className="home-heading">
                <ul className="home-list">
                  {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                      <div className="task-info">
                        <span className="task">{task.text}</span>
                        <span className="time">{task.time}</span>
                        {/* <span className="task">{task.text}</span> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Textarea for adding tasks */}
              <div className="outer-textarea">
                <div className="home-textarea">
                  <textarea
                    style={{
                      resize:"none",
                      maxHeight: "23vh",
                      maxWidth: "69vw",
                      borderRadius: "9px",
                      border: "none",
                      fontSize: "25px",
                      background:"white",
                      height:"23vh",
                      width:"69vw"
                     
                    }}
                    placeholder="Enter your text here..........."
                    value={task}
                    onChange={handleTaskChange}
                  ></textarea>
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={handleAddTask}
                  >
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src={vector}
                      alt="send button"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
