import TasksFilter from '../tasks-filter';
import PropTypes from 'prop-types';

const Footer = ({ showActiveTasks, showAllTasks, showCompletedTasks, clearCompleted, activeTasksCount }) => (
  <footer className="footer">
    <span className="todo-count">{activeTasksCount} items left</span>
    <TasksFilter
      showActiveTasks={showActiveTasks}
      showAllTasks={showAllTasks}
      showCompletedTasks={showCompletedTasks}
    />
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  showActiveTasks: () => {},
  showAllTasks: () => {},
  showCompletedTasks: () => {},
  clearCompleted: () => {},
  activeTasksCount: '',
};

Footer.propTypes = {
  showActiveTasks: PropTypes.func,
  showAllTasks: PropTypes.func,
  showCompletedTasks: PropTypes.func,
  clearCompleted: PropTypes.func,
  activeTasksCount: PropTypes.number,
};

export default Footer;
