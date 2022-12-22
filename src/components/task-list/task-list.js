import Task from '../task';
import PropTypes from 'prop-types';

const TaskList = ({ todoData, onCompleted, onDeleted, onEdited, onEditingSubmit, filter }) => {
  let todoDataAfterFilter;
  if (filter === 'All') {
    todoDataAfterFilter = [...todoData];
  } else if (filter === 'Active') {
    todoDataAfterFilter = [...todoData].filter((task) => !task.completed);
  } else if (filter === 'Completed') {
    todoDataAfterFilter = [...todoData].filter((task) => task.completed);
  }
  const tasks = todoDataAfterFilter.map((task) => (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      <Task
        id={task.id}
        description={task.description}
        timeStamp={task.timeStamp}
        onCompleted={() => onCompleted(task.id)}
        onDeleted={() => onDeleted(task.id)}
        onEdited={() => onEdited(task.id)}
        onEditingSubmit={onEditingSubmit}
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
