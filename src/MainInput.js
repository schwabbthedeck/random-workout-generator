import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from './components/Footer';
import './MainInput.css';
// import WorkoutList from './WorkoutList'

// ugly but it works - will refractor into more components moving forward

class MainInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: true,
      buttonText: "Pick Me A Random Workout!",
      workoutInfo: [],
      repNumber: 0,
      anxious: false,
    }
  }

  chooseWorkout() {
    this.setState({
      intro: false,
      buttonText: "I want a new workout!",
      workout: ChooseAWorkout(),
      repNumber: Math.ceil(Math.random() * 14),
    });
  }

  deepBreath() {
    this.setState({
      intro: false,
      anxious: true,
    });
    document.getElementById("main-container").style.display = "none";
    document.getElementById("anxiety-container").style.display = "block";
  }

  render() {
    let workoutText;
    if (!this.state.intro && !this.state.anxious) {
      workoutText = (
        <Row>
          <Col>
            <ul>
              {this.state.workout.map(item => (
                <li key={item}>{this.state.repNumber} {item}</li>
              ))}
              <li>20 Mountain Climbers</li>
            </ul>
          </Col>
        </Row>
      );
    }

    return (
      <div className="MainInput">
        <div className="top-row">
          <Button className="reset-button" variant="outline-primary" size="sm"
            onClick={() => window.location.reload(false)}
            disabled={this.state.intro}>
            Reset
          </Button>
          <Button className="anxiety-button" variant="warning" size="sm"
            onClick={() => this.deepBreath()}>
            Help, I'm Anxious!
          </Button>
        </div>
        {/* <Container>
          <Row>
            <Col>
              <WorkoutList />
            </Col>
          </Row>
        </Container> */}
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
                onClick={() => this.chooseWorkout()}>
                {this.state.buttonText}
              </Button>
            </Col>
          </Row>

        </Container>
        <Container id="anxiety-container">
          <Row>
            <Col>
              {/* <div style={{ width: '100%', height: '0', paddingBottom: '108%', position: 'relative' }}>
                <iframe title="breath-gif" src="https://giphy.com/embed/krP2NRkLqnKEg" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
              </div>
              <p>
                <a href="https://giphy.com/gifs/help-satisfying-breathe-krP2NRkLqnKEg">via GIPHY</a>
              </p> */}
              <img alt="breathing-gif" src="https://media.giphy.com/media/krP2NRkLqnKEg/source.gif"></img>
              <p>
                <a href="https://giphy.com/gifs/help-satisfying-breathe-krP2NRkLqnKEg">via GIPHY</a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
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