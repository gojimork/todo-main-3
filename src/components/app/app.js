import React, {Component} from 'react';
import TaskList from '../task-list';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import './app.css'

export default class App extends Component  {
    maxCount = 100

    state = {
      todoData: [
        {className: "completed", description: "Completed task", id: 1, show: true, timeStamp: Date.parse('June 16 1993') },
        {className: "editing", description: "Editing task", id: 2, show: true, timeStamp: Date.parse('June 16 1999')},
        {className: "", description: "Active task", id: 3, show: true, timeStamp: Date.parse('June 16 2010')}
      ]
    }

    clearCompleted = () => {
      this.setState(({todoData}) => {
        const newTodoData = [...todoData].filter(task => {
          return task.className.indexOf('completed') === -1
        })
        return {todoData: newTodoData}
      })
    }

    showCompletedTasks = () => {
      this.setState(({todoData}) =>{
        const newTodoData = [...todoData].map(task=>{
          task.className = task.className.replace('hidden', '')
          if(task.className.indexOf('completed') === -1) task.className += ' hidden'
          return task
        })
        return {todoData: newTodoData}
      })
    }

    showAllTasks = () => {
      this.setState(({todoData})=>{
        const newTodoData = [...todoData].map(task => {
          task.className = task.className.replace('hidden', '')
          return task
        })
        return {todoData: newTodoData}
      })
    }

    showActiveTasks = () => {
      this.setState(({todoData})=>{
        const newTodoData = [...todoData].map(task => {
          task.className = task.className.replace('hidden', '')
          if(task.className.indexOf("completed") > -1) task.className += ' hidden'
          return task
        })
        return {todoData:newTodoData}
      })
    }

    addTask = (description) => {
      const newTask = {className: "", description: description, id: this.maxCount++, timeStamp: Date.now()}
      this.setState(({todoData})=>{
        return {todoData: [newTask, ...todoData]}
      })
    }

    deleteTask = (id) => {
      this.setState(({todoData})=>{
        const newTodoData = [...todoData].filter(task => task.id !== id )
        return {
          todoData: newTodoData
        }
      })
    }

    completeTask = (id) => {
      this.setState( ({todoData}) => {
        const completedTaskIndex = todoData.findIndex(task => task.id === id)
        const newTodoData = [...todoData]
        newTodoData[completedTaskIndex].className ?  newTodoData[completedTaskIndex].className = "" : newTodoData[completedTaskIndex].className = "completed"
        return {
          todoData: newTodoData
        }
      })
    }
    
    render(){
      let activeTasksCount = this.state.todoData.filter(task => task.className.indexOf('completed') === -1).length
      return (
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm addTask={this.addTask}/>
          </header>
          <section className="main">
            <TaskList todoData={this.state.todoData} 
                      onCompleted={this.completeTask} 
                      onDeleted={this.deleteTask}/>
            <Footer showActiveTasks={this.showActiveTasks}
                    showAllTasks = {this.showAllTasks}
                    showCompletedTasks = {this.showCompletedTasks}
                    clearCompleted={this.clearCompleted}
                    activeTasksCount={activeTasksCount}/>
          </section>
        </section>
      )
    }
    
}