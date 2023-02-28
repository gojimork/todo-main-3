import PropTypes from 'prop-types';
import { useState } from 'react';
import './new-task-form.css';

export default function NewTaskForm({ addTask }) {
  const [description, setDescription] = useState('');
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const onSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const onAddSubmit = (e) => {
    e.preventDefault();
    if (description) {
      addTask(description, minutes, seconds);
      setDescription('');
      setMinutes('');
      setSeconds('');
    }
  };

  return (
    <form onSubmit={onAddSubmit}>
      <ul className="task-form">
        <li>
          <input className="new-todo" placeholder="Task" onChange={onDescriptionChange} value={description} />
        </li>
        <li>
          <input className="new-todo" type="number" placeholder="Min" onChange={onMinutesChange} value={minutes} />
        </li>
        <li>
          <input className="new-todo" type="number" placeholder="Sec" onChange={onSecondsChange} value={seconds} />
        </li>
      </ul>
      <button type="submit" />
    </form>
  );
}

NewTaskForm.defaultProps = {
  addTask: () => {},
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};
