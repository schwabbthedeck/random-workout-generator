import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './WorkoutContainer.css';

class WorkoutContainer extends React.Component {
  render(){
    let workoutText;
    if (!this.props.isIntroState && !this.props.isAnxiousState) {
      workoutText = (
        <Row>
          <Col>
            <ul>
              {this.props.workoutInfo.map(item => (
                <li key={item}>{this.props.repNumber} {item}</li>
              ))}
              <li>20 Mountain Climbers</li>
            </ul>
          </Col>
        </Row>
      );
    }
    // var workouts = [
    //   ["Pushups", "Crunches", "Squats", "Burpees"],
    //   ["Bicep Curls", "Spider Crunch", "Shoulder Press", "Dips"],
    //   ["Upright Row", "Superman Crunch", "Side Lunges", "Tri Extensions"],
    //   ["Quick Squats", "Dumbbell Rows", "Side to Side Lunge Walk", "Zottman Curl"],
    //   ["Squat with Weight Swing", "Side Crunches", "Side Plank Rotations with Overhead Reach", "Incline Curl"]
    // ];
    return (
      <Container id="main-container" fluid>
          <Row className="intro-information">
            <Col>
              <IntroInformation />
            </Col>
          </Row>
          {workoutText}

          <Row className="random-button-row">
            <Col md={{ span: 8, offset: 2 }}>
              <Button className="random-button" variant="primary" size="lg" block
                onClick={this.props.chooseRandomWorkout}>
                {this.props.buttonText}
              </Button>
            </Col>
          </Row>

        </Container>
    );
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



export default WorkoutContainer;