import EditTaskForm from '../edit-task-form';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({ id, description, timeStamp, onCompleted, onDeleted, onEdited, onEditingSubmit }) {
  return (
    <div>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onClick={onCompleted}>
          <span className="description">{description}</span>
          <span className="created">{formatDistanceToNow(timeStamp, { addSuffix: true })}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onEdited} />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      <EditTaskForm description={description} onEditingSubmit={onEditingSubmit} id={id} />
    </div>
  );
}

Task.defaultProps = {
  description: '',
  timeStamp: '',
  onCompleted: () => {},
  onDeleted: () => {},
};

Task.propTypes = {
  description: PropTypes.string,
  timeStamp: PropTypes.number,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
};

export default Task;
