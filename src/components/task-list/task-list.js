import Task from '../task';
import PropTypes from 'prop-types';

const TaskList = ({ todoData, onCompleted, onDeleted }) => {
  const tasks = todoData.map((task) => (
    <li key={task.id} className={task.className}>
      <Task
        id={task.id}
        description={task.description}
        timeStamp={task.timeStamp}
        onCompleted={() => onCompleted(task.id)}
        onDeleted={() => onDeleted(task.id)}
      />
    </li>
  ));
  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.defaultProps = {
  todoData: [],
  onCompleted: () => {},
  onDeleted: () => {},
};

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.shape),
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
};

export default TaskList;
