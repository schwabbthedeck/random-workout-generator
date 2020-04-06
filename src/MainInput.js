import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './MainInput.css';

class MainInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: true,
      buttonText: "Pick Me A Random Workout!",
      workoutInfo: null,
      repNumber: 0
    }
  }

  chooseWorkout() {
    this.setState({
      intro: false,
      buttonText: "I want a new workout!",
      workout: ChooseAWorkout(),
      repNumber: Math.floor(Math.random() * 15),
    })
  }

  render() {
    return (
      <div className="MainInput">
        <Container className="main-container" fluid>
          <Row>
            <Col>
              {this.state.intro ? <
                IntroInformation /> :
                <ul>
                  {this.state.workout.map(item => (
                    <li key={item}>{this.state.repNumber} {item}</li>
                  ))}
                  <li>20 Mountain Climbers</li>
                </ul>
              }
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Button className="random-button" variant="primary" size="lg" block
                onClick={() => this.chooseWorkout()}>
                {this.state.buttonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

function IntroInformation(props) {
  return (
    <div>
      <h4>Welcome to the Random Workout Generator!</h4>
      <div>This was designed to produce a random short workout you can do at home.</div>
    </div>
  );
};

function ChooseAWorkout() {
  var workouts = [
    ["Pushups", "Crunches", "Squats", "Burpees"],
    ["Bicep Curls", "Spider Crunch", "Shoulder Press", "Dips"],
    ["Upright Row", "Superman Crunch", "Side Lunges", "Tri Extensions"],
    ["Quick Squats", "Dumbbell Rows", "Side to Side Lunge Walk", "Zottman Curl"],
    ["Squat with Weight Swing", "Side Crunches", "Side Plank Rotations with Overhead Reach", "Incline Curl"]
  ];

  var randomNumber = Math.floor(Math.random() * workouts.length);
  return workouts[randomNumber];
}

export default MainInput;