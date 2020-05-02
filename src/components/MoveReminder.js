import React from 'react';
import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import './MoveReminder.css';
import alertNoise from './zapsplat_multimedia_bell_chime_alert_synthesised_positive_002_48012.mp3';

class MoveReminder extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
    this.rememberToMove = this.rememberToMove.bind(this);
    this.timeoutFunction = {};
    this.audio = new Audio(alertNoise);
  }

  handleChange(checked) {
    this.setState({ checked });
    if (checked) {
      this.timeoutFunction = setTimeout(this.rememberToMove, 3.6e+6);
      // this.timeoutFunction = setTimeout(this.rememberToMove, 3000);
    } else {
      clearTimeout(this.timeoutFunction);
    }
  };

  rememberToMove() {
    this.audio.play();
    alert("It's been an hour! Get up and move!");
    this.timeoutFunction = setTimeout(this.rememberToMove, 3.6e+6);
    // this.timeoutFunction = setTimeout(this.rememberToMove, 3000);
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