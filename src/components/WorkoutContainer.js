import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import RandomWorkout from './RandomWorkout';
import YogaWorkout from './YogaWorkout';
import AdvancedOptions from './AdvancedOptions';
import './WorkoutContainer.css';

class WorkoutContainer extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="randomWorkout" id="uncontrolled-tab-example">
        <Tab eventKey="randomWorkout" title="Random Workout">
          <RandomWorkout />
        </Tab>
        <Tab eventKey="yoga" title="Random Yoga Pose">
          <YogaWorkout />
        </Tab>
        <Tab eventKey="advanced" title="Advanced Options">
          <AdvancedOptions />
        </Tab>
      </Tabs>

    );
  }
}

export default WorkoutContainer;