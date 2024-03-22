import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>To-Do List</h2>
      <form onSubmit={addTask} style={styles.form}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
          placeholder="Add a new task"
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.task}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    fontSize: '16px',
    border: '2px solid #007bff', 
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s', 
  },
  list: {
    listStyle: 'none',
    paddingLeft: '0',
  },
  task: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#fff', 
    margin: '5px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
