import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import { Component } from 'react';
import './app.css';

export default class App extends Component {
  maxCount = 100;

  filter = 'All';

  state = {
    todoData: [
      {
        className: 'completed',
        description: 'Completed task',
        id: 1,
        show: true,
        timeStamp: Date.parse('June 16 1993'),
      },
      { className: 'editing', description: 'Editing task', id: 2, show: true, timeStamp: Date.parse('June 16 1999') },
      { className: '', description: 'Active task', id: 3, show: true, timeStamp: Date.parse('June 16 2010') },
    ],
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData].filter((task) => task.className.indexOf('completed') === -1);
      return { todoData: newTodoData };
    });
  };

  showCompletedTasks = () => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData].map((task) => {
        task.className = task.className.replace('hidden', '');
        if (task.className.indexOf('completed') === -1) task.className += ' hidden';
        return task;
      });
      return { todoData: newTodoData };
    });
    this.filter = 'Completed';
  };

  showAllTasks = () => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData].map((task) => {
        task.className = task.className.replace('hidden', '');
        return task;
      });
      return { todoData: newTodoData };
    });
    this.filter = 'All';
  };

  showActiveTasks = () => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData].map((task) => {
        task.className = task.className.replace('hidden', '');
        if (task.className.indexOf('completed') > -1) task.className += ' hidden';
        return task;
      });
      return { todoData: newTodoData };
    });
    this.filter = 'Active';
  };

  addTask = (description) => {
    const newTask = { className: '', description, id: this.maxCount++, timeStamp: Date.now() };
    this.setState(({ todoData }) => ({ todoData: [newTask, ...todoData] }));
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData].filter((task) => task.id !== id);
      return {
        todoData: newTodoData,
      };
    });
  };

  editTask = (id) => {
    this.setState(({ todoData }) => {
      const editedTaskIndex = todoData.findIndex((task) => task.id === id);
      const newTodoData = [...todoData];
      newTodoData[editedTaskIndex].className += ' editing';
      return { todoData: newTodoData };
    });
  };

  onEditingSubmit = (id, description) => {
    this.setState(({ todoData }) => {
      const editedTaskIndex = todoData.findIndex((task) => task.id === id);
      const newTodoData = [...todoData];
      newTodoData[editedTaskIndex].description = description;
      newTodoData[editedTaskIndex].className = newTodoData[editedTaskIndex].className.replace('editing', '');
      return {
        todoData: newTodoData,
      };
    });
  };

  completeTask = (id) => {
    this.setState(({ todoData }) => {
      const completedTaskIndex = todoData.findIndex((task) => task.id === id);
      const newTodoData = [...todoData];
      newTodoData[completedTaskIndex].className
        ? (newTodoData[completedTaskIndex].className = '')
        : (newTodoData[completedTaskIndex].className = 'completed');
      return {
        todoData: newTodoData,
      };
    });
    if (this.filter === 'Completed') this.showCompletedTasks();
    if (this.filter === 'Active') this.showActiveTasks();
  };

  render() {
    const activeTasksCount = this.state.todoData.filter((task) => task.className.indexOf('completed') === -1).length;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todoData={this.state.todoData}
            onCompleted={this.completeTask}
            onDeleted={this.deleteTask}
            onEdited={this.editTask}
            onEditingSubmit={this.onEditingSubmit}
          />
          <Footer
            showActiveTasks={this.showActiveTasks}
            showAllTasks={this.showAllTasks}
            showCompletedTasks={this.showCompletedTasks}
            clearCompleted={this.clearCompleted}
            activeTasksCount={activeTasksCount}
          />
        </section>
      </section>
    );
  }
}
