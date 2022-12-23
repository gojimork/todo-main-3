import { Component } from 'react';

export default class EditTaskForm extends Component {
  state = {
    description: this.props.description,
  };

  onEditChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEditingSubmit(this.props.id, this.state.description);
  };

  render() {
    return (
      <form className="editing" onSubmit={this.onSubmit}>
        <input type="text" className="edit" defaultValue={this.props.description} onChange={this.onEditChange} />
      </form>
    );
  }
}
