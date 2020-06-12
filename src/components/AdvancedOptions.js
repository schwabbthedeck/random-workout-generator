import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// workout object
let workouts = [
  {
    id: 1,
    value: "Bicep Curls",
    isChecked: true
  },
  {
    id: 2,
    value: "Burpees",
    isChecked: true
  },
  {
    id: 3,
    value: "Crunches",
    isChecked: true
  },
  {
    id: 4,
    value: "Dips",
    isChecked: true
  },
  {
    id: 5,
    value: "Dumbbell Rows",
    isChecked: true
  },
  {
    id: 6,
    value: "Incline Curl",
    isChecked: true
  },
  {
    id: 7,
    value: "Pushups",
    isChecked: true
  },
  {
    id: 8,
    value: "Quick Squats",
    isChecked: true
  },
  {
    id: 9,
    value: "Shoulder Press",
    isChecked: true
  },
  {
    id: 10,
    value: "Side Crunches",
    isChecked: true
  },
  {
    id: 11,
    value: "Side Lunges",
    isChecked: true
  },
  {
    id: 12,
    value: "Side Plank Rotations with Overhead Reach",
    isChecked: true
  },
  {
    id: 13,
    value: "Side to Side Lunge Walk",
    isChecked: true
  },
  {
    id: 14,
    value: "Spider Crunch",
    isChecked: true
  },
  {
    id: 15,
    value: "Squat with Weight Swing",
    isChecked: true
  },
  {
    id: 16,
    value: "Squats",
    isChecked: true
  },
  {
    id: 17,
    value: "Superman Crunch",
    isChecked: true
  },
  {
    id: 18,
    value: "Tri Extensions",
    isChecked: true
  },
  {
    id: 19,
    value: "Upright Row",
    isChecked: true
  },
  {
    id: 20,
    value: "Zottman Curl",
    isChecked: true
  }
];

// Number validation error message
let mustBeNumberMessage = "Input must be a positive integer.";

class AdvancedOptions extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectedWorkoutsOptionsChange = this.onSelectedWorkoutsOptionsChange.bind(this);
    this.selectAllExerciseOptions = this.selectAllExerciseOptions.bind(this);
    this.onChangeInputs = this.onChangeInputs.bind(this);
    this.changeMountainClimberState = this.changeMountainClimberState.bind(this);
    this.state = {
      intro: true,
      selectedWorkoutIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      numberOfReps: '',
      numberOfExercises: 5,
      addMountainClimbers: false,
      submitError: '',
      errors: {
        numberOfReps: '',
        numberOfExercises: ''
      }
    }
  }

  // remove id from state or add it back on checkbox change
  onSelectedWorkoutsOptionsChange = (id) => {
    const workoutIds = this.state.selectedWorkoutIds;
    const newWorkoutIds = workoutIds.includes(id) ? workoutIds.filter(i => i !== id) : [...workoutIds, id];
    this.setState({
      selectedWorkoutIds: newWorkoutIds
    });
    if (this.state.numberOfExercises > newWorkoutIds.length) {
      let errors = this.state.errors;
      errors.numberOfExercises = mustBeNumberMessage + ' And less than or equal to the number of exercises selected.';
      this.setState({ errors });
    } else {
      let errors = this.state.errors;
      errors.numberOfExercises = '';
      this.setState({ errors });
    }
  }

  // set all exercises on select all button
  selectAllExerciseOptions() {
    const allWorkoutIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    this.setState({
      selectedWorkoutIds: allWorkoutIds
    })
  }

  // set input value on change
  onChangeInputs(event) {
    const { id, value } = event.target;
    let errors = this.state.errors;
    // check that the values are positive integers
    // add error if they aren't
    switch (id) {
      case 'numberOfReps':
        errors.numberOfReps = ((Number.isInteger(Number(value)) && parseInt(value) > 0) || value === '') ? '' : mustBeNumberMessage;
        break;
      case 'numberOfExercises':
        // check that they are positive and less than the number of selected exercises
        errors.numberOfExercises = (Number.isInteger(Number(value)) && parseInt(value) > 0 && Number(value) <= this.state.selectedWorkoutIds.length) ? '' : mustBeNumberMessage + ' And less than or equal to the number of exercises selected.';
        break;
      default:
        break;
    }

    if (id === 'numberOfReps' && value === '') {
      // if the the number of reps is blank set to 0 for random
      this.setState({ errors, [id]: '' });
    } else {
      this.setState({ errors, [id]: Number(value) });
    }
  }

  // maintain state on checked box for mountain climber option
  changeMountainClimberState(event) {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  }

  runRandomWorkout() {
    // check that something is selected
    if (this.state.selectedWorkoutIds.length > 0) {
      this.setState({
        intro: false,
        submitError: ''
      })
    } else {
      // nothing selected
      this.setState({
        submitError: 'Please select at least one exercise.'
      })
    }
  }

  backToForm() {
    this.setState({
      intro: true
    })
  }

  render() {
    let message = "";
    let content;
    if (this.state.intro) {
      message = "Select which exercises, the number of reps, and the number of different exercises you want to make up your workout.";
      content = (<Row>
        <Col className="hide-on-xs" sm={2}></Col>
        <Col sm={4}>
          <ListGroup className="workout-options-list">
            {workouts.map(workout => (
              <ListGroup.Item>
                <Form.Check type="checkbox" id={workout.id} label={workout.value}
                  checked={this.state.selectedWorkoutIds.includes(workout.id)}
                  onChange={() => this.onSelectedWorkoutsOptionsChange(workout.id)}></Form.Check>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button size="sm" variant="light" style={{ marginTop: "5px" }}
            onClick={() => this.selectAllExerciseOptions()}>
            Select All Exercises
        </Button>
        </Col>
        <Col sm={4}>
          <Form className="advanced-input-options">
            <Form.Group controlId="numberOfReps" onChange={this.onChangeInputs}>
              <Form.Label>Number of Reps</Form.Label>
              <Form.Control type="string" placeholder="Random" defaultValue={this.state.numberOfReps} />
              <Form.Text className="text-danger">{this.state.errors.numberOfReps}</Form.Text>
              <Form.Text className="text-muted">
                Leave blank for random number of reps between 1 and 15.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="numberOfExercises" onChange={this.onChangeInputs}>
              <Form.Label>Number of Different Exercises</Form.Label>
              <Form.Control type="string" defaultValue={this.state.numberOfExercises} />
              <Form.Text className="text-danger">{this.state.errors.numberOfExercises}</Form.Text>
            </Form.Group>
            <Form.Group controlId="addMountainClimbers" onChange={this.changeMountainClimberState}
              style={{ marginTop: "1.5rem" }}>
              <Form.Check type="checkbox" label="Add 20 Mountain Climbers" checked={this.state.addMountainClimbers}></Form.Check>
            </Form.Group>
          </Form>
        </Col>
      </Row>);
    } else {
      // not intro - create random workout based on input
      const workoutIds = this.state.selectedWorkoutIds;
      const numberOfExercises = this.state.numberOfExercises;
      const numberOfReps = (this.state.numberOfReps === '' ? Math.ceil(Math.random() * 15) : this.state.numberOfReps);
      const selectedWorkouts = workouts.filter((workout) => {
        return workoutIds.some((id) => {
          return workout.id === id;
        })
      });
      let randomWorkouts = [];
      debugger;
      for(var i = 0; i < numberOfExercises; i++) {
        var randomIndex = Math.floor(Math.random() * selectedWorkouts.length);
        randomWorkouts.push(selectedWorkouts[randomIndex]);
        selectedWorkouts.splice(randomIndex, 1);
      }
      content = (<ul>
        {randomWorkouts.map((item) => (
          <li key={item.id}>{numberOfReps} {item.value}</li>
        ))}
        {this.state.addMountainClimbers ? <li>{numberOfReps} Mountain Climbers</li> : ''}
      </ul>);
    }

    return (
      <Container id="main-container" fluid>
        <Row className="intro-information">
          <Col>
            <div>
              <h4>Advanced Options</h4>
            </div>
            <div>{message}</div>
          </Col>
        </Row>
        {content}
        <Row className="random-button-row">
          <Col md={{ span: 8, offset: 2 }}>
            <Button className="random-button" variant="primary" size="lg" block
              onClick={this.state.intro ? () => this.runRandomWorkout() : () => this.backToForm()}>
              {this.state.intro ? "Run It!" : "Back To Options"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-danger">{this.state.submitError}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvancedOptions;
