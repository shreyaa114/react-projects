import React, { useState } from 'react';

export function Todo() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  function addTask(e) {
    setTasks(prev => [...prev, { todo, completed: false }]);
    setTodo('');
  }

  function handleDel(e) {
    const updatedTask = tasks.filter(task => {
      return task.todo !== e.target.value;
    });
    setTasks(updatedTask);
  }

  function handleComplete(i) {
    const completedTask = tasks.map((task, index) => {
      if (index === i) return { ...task, completed: true };
      else return task;
    });
    setTasks(completedTask);
  }

  return (
    <div>
      <input
        style={{ margin: 10 }}
        type='text'
        placeholder='Enter the task'
        onChange={e => setTodo(e.target.value)}
      />
      <button onClick={addTask}> Add </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.completed ? <s>{task.todo}</s> : task.todo}
            <button
              style={{ marginLeft: 5 }}
              value={task.todo}
              onClick={handleDel}
            >
              Delete
            </button>
            <button
              style={{ marginLeft: 5 }}
              value={task.todo}
              onClick={() => handleComplete(index)}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
