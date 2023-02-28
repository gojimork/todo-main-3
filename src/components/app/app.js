import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import { v4 as uuidv4 } from 'uuid';
import './app.css';
import { useState } from 'react';

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: uuidv4(),
      completed: false,
      description: 'drink',
      minutes: 0,
      seconds: 3,
      timeStamp: Date.parse('June 16 1993'),
    },
    {
      id: uuidv4(),
      completed: false,
      description: 'sleep',
      minutes: 1,
      seconds: 2,
      timeStamp: Date.parse('June 16 1999'),
    },
    {
      id: uuidv4(),
      completed: false,
      description: 'run',
      minutes: 110,
      seconds: 10,
      timeStamp: Date.parse('June 16 2010'),
    },
  ]);
  const [filter, setFilter] = useState('All');

  const clearCompleted = () => {
    setTodoData((todoDataState) => {
      const newTodoData = [...todoDataState].filter((task) => !task.completed);
      return newTodoData;
    });
  };

  const showCompletedTasks = () => {
    setFilter('Completed');
  };

  const showAllTasks = () => {
    setFilter('All');
  };

  const showActiveTasks = () => {
    setFilter('Active');
  };

  const addTask = (description, minutes, seconds) => {
    const newTask = { className: '', description, minutes, seconds, id: uuidv4(), timeStamp: Date.now() };
    setTodoData((todoDataState) => [newTask, ...todoDataState]);
  };

  const deleteTask = (id) => {
    setTodoData((todoDataState) => {
      const newTodoData = [...todoDataState].filter((task) => task.id !== id);
      return newTodoData;
    });
  };

  const onEditingSubmit = (id, description) => {
    setTodoData((todoDataState) => {
      const editedTaskIndex = todoDataState.findIndex((task) => task.id === id);
      const newTodoData = [...todoDataState];
      newTodoData[editedTaskIndex].description = description;
      return newTodoData;
    });
  };

  const completeTask = (id) => {
    setTodoData((todoDataState) => {
      const newTodoData = [...todoDataState].map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      });
      return newTodoData;
    });
    if (filter === 'Completed') showCompletedTasks();
    if (filter === 'Active') showActiveTasks();
  };

  const activeTasksCount = todoData.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          todoData={todoData}
          onCompleted={completeTask}
          onDeleted={deleteTask}
          onEditingSubmit={onEditingSubmit}
          filter={filter}
        />
        <Footer
          showActiveTasks={showActiveTasks}
          showAllTasks={showAllTasks}
          showCompletedTasks={showCompletedTasks}
          clearCompleted={clearCompleted}
          activeTasksCount={activeTasksCount}
          filter={filter}
        />
      </section>
    </section>
  );
}
