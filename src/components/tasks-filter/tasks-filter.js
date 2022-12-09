import PropTypes from 'prop-types'

const TasksFilter = ({showActiveTasks,showAllTasks,showCompletedTasks}) => {
    return (
        <ul className="filters">
            <li>
              <button 
              onClick={showAllTasks}>All</button>
            </li>
            <li>
              <button onClick={showActiveTasks}>Active</button>
            </li>
            <li>
              <button onClick={showCompletedTasks}>Completed</button>
            </li>
          </ul>
    )
}

TasksFilter.defaultProps = {
  showActiveTasks: ()=>{},
  showAllTasks: ()=>{},
  showCompletedTasks: ()=>{}
}

TasksFilter.propTypes = {
  showActiveTasks: PropTypes.func,
  showAllTasks: PropTypes.func,
  showCompletedTasks: PropTypes.func
}

export default TasksFilter