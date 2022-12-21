import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static defaultProps = {
    addTask: () => {},
  };

  static propTypes = {
    addTask: PropTypes.func,
  };

  state = {
    description: '',
  };

  onInputValue = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onAddSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.description);
    this.setState({ description: '' });
  };

  render() {
    return (
      <form onSubmit={this.onAddSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onInputValue}
          value={this.state.description}
        />
      </form>
    );
  }
}
