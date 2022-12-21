import PropTypes from 'prop-types';

const TasksFilter = ({ showActiveTasks, showAllTasks, showCompletedTasks, filter }) => {
  let allButtonClass = '';
  let activeButtonClass = '';
  let completeButtonClass = '';

  if (filter === 'All') allButtonClass = 'selected';
  if (filter === 'Active') activeButtonClass = 'selected';
  if (filter === 'Complete') completeButtonClass = 'selected';

  return (
    <ul className="filters">
      <li>
        <button className={allButtonClass} type="button" onClick={showAllTasks}>
          All
        </button>
      </li>
      <li>
        <button className={activeButtonClass} type="button" onClick={showActiveTasks}>
          Active
        </button>
      </li>
      <li>
        <button className={completeButtonClass} type="button" onClick={showCompletedTasks}>
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.defaultProps = {
  showActiveTasks: () => {},
  showAllTasks: () => {},
  showCompletedTasks: () => {},
};

TasksFilter.propTypes = {
  showActiveTasks: PropTypes.func,
  showAllTasks: PropTypes.func,
  showCompletedTasks: PropTypes.func,
};

export default TasksFilter;
