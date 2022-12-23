import EditTaskForm from '../edit-task-form';
import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    description: '',
    timeStamp: '',
    onCompleted: () => {},
    onDeleted: () => {},
  };

  static propTypes = {
    description: PropTypes.string,
    timeStamp: PropTypes.number,
    onCompleted: PropTypes.func,
    onDeleted: PropTypes.func,
  };

  state = { edit: false };

  onEditedClick = () => {
    this.setState({ edit: true });
  };

  render() {
    const { id, description, timeStamp, onCompleted, onDeleted, onEditingSubmit } = this.props;
    const { edit } = this.state;
    console.log(edit);
    if (edit) {
      return <EditTaskForm description={description} onEditingSubmit={onEditingSubmit} id={id} />;
    }
    return (
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label onClick={onCompleted}>
          <span className="description">{description}</span>
          <span className="created">{formatDistanceToNow(timeStamp, { addSuffix: true })}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={this.onEditedClick} />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
    );
  }
}
