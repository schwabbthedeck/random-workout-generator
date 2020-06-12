import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class RandomWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      buttonText: "Pick Me A Random Workout!",
      workout: '',
      repNumber: 0
    }
  }

  chooseWorkout() {
    this.setState({
      intro: false,
      buttonText: "I Want A New Workout!",
      workout: ChooseAWorkout(),
      repNumber: Math.ceil(Math.random() * 14),
    });
  }

  render() {
    let workoutText, message;
    if (!this.state.intro) {
      message = "Hit the button for another workout!";
      workoutText = (<ul>
          <li>{this.state.repNumber} {this.state.workout}</li>
        </ul>);
    } else {
      message = "Gives you a random workout exercise to do anywhere.";
    }
    return (
      <Container id="main-container" fluid>
        <Row className="intro-information">
          <Col>
            <div>
              <h4>Welcome to the Random Workout Generator!</h4>
              <div>{message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {workoutText}
          </Col>
        </Row>
        <Row className="random-button-row">
          <Col md={{ span: 8, offset: 2 }}>
            <Button className="random-button" variant="primary" size="lg" block
              onClick={() => this.chooseWorkout()}>
              {this.state.buttonText}
            </Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

function ChooseAWorkout() {
  var workouts = ["Pushups", "Crunches", "Squats", "Burpees", "Bicep Curls", "Spider Crunch", "Shoulder Press", "Dips", "Upright Row", "Superman Crunch", "Side Lunges", "Tri Extensions",  "Quick Squats", "Dumbbell Rows", "Side to Side Lunge Walk", "Zottman Curl", "Squat with Weight Swing", "Side Crunches", "Side Plank Rotations with Overhead Reach", "Incline Curl"];
  var randomNumber = Math.floor(Math.random() * workouts.length);
  return workouts[randomNumber];
}

export default RandomWorkout;