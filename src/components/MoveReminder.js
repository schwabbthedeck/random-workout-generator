import React from 'react';
import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import './MoveReminder.css';

class MoveReminder extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    // debugger;
    this.setState({ checked });
  }

  render() {
    return (
      <Card className="move-reminder">
        <label>
          <div className="switch-label">Remind me to move every hour!</div>
          <Switch onChange={this.handleChange} checked={this.state.checked} className="switch" />
        </label>
      </Card>
    );
  }
}

export default MoveReminder;