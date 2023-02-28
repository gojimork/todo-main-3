import EditTaskForm from '../edit-task-form';
import Timer from '../timer/timer';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Task({
  id,
  description,
  minutes,
  seconds,
  timeStamp,
  onCompleted,
  onDeleted,
  onEditingSubmit,
}) {
  const [edit, setEdit] = useState(false);

  const onEditedClick = () => {
    setEdit(true);
  };

  const hiddenEditTaskForm = () => {
    setEdit(false);
  };
  const timer = minutes || seconds ? <Timer seconds={seconds} minutes={minutes} /> : null;

  if (edit) {
    return (
      <EditTaskForm
        description={description}
        onEditingSubmit={onEditingSubmit}
        id={id}
        hiddenEditTaskForm={hiddenEditTaskForm}
      />
    );
  }
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onClick={onCompleted} />
      <label>
        <span className="description">{description}</span>
        {timer}
        <span className="created">{formatDistanceToNow(timeStamp, { addSuffix: true })}</span>
      </label>
      <button type="button" className="icon icon-edit" onClick={onEditedClick} />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );
}

Task.defaultProps = {
  id: '',
  description: '',
  timeStamp: '',
  onCompleted: () => {},
  onDeleted: () => {},
  onEditingSubmit: () => {},
};

Task.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  timeStamp: PropTypes.number,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
  onEditingSubmit: PropTypes.func,
};
