import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Task1 from "./tasks/task10/Task10";
import "./App.css";

function Home() {
  const tasks = [
    {
      name: "ToDo List (Task 1)",
      path: "/task1",
      description: "A simple task management application",
      icon: "✓"
    },
    // add more tasks here
  ];

  return (
    <div className="container">
      <header>
        <h1>GDG Front End Projects</h1>
        <p>Navigate between tasks and projects</p>
      </header>
      <main>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.name}>
              <Link to={task.path} className="task-card">
                <div className="task-icon">{task.icon}</div>
                <h3 className="task-title">{task.name}</h3>
                <p className="task-description">{task.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task1" element={<Task1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
