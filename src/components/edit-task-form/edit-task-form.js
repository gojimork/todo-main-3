import PropTypes from 'prop-types';
import { useState } from 'react';

export default function EditTaskForm({ description, onEditingSubmit, hiddenEditTaskForm, id }) {
  const [newDescription, setNewDescription] = useState(description);

  const onEditChange = (e) => {
    setNewDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEditingSubmit(id, newDescription);
    hiddenEditTaskForm();
  };

  return (
    <form className="editing" onSubmit={onSubmit}>
      <input type="text" className="edit" defaultValue={description} onChange={onEditChange} />
    </form>
  );
}

EditTaskForm.defaultProps = {
  description: '',
  onEditingSubmit: () => {},
  id: '',
  hiddenEditTaskForm: () => {},
};

EditTaskForm.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  hiddenEditTaskForm: PropTypes.func,
  onEditingSubmit: PropTypes.func,
};
