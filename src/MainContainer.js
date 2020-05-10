import React from 'react';
import TopRow from './components/TopRow';
import WorkoutContainer from './components/WorkoutContainer';
import AnxietyContainer from './components/AnxietyContainer';
import Footer from './components/Footer';
import './MainContainer.css';

class MainContainer extends React.Component {
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
    // document.getElementById("main-container").style.display = "none";
    // document.getElementById("anxiety-container").style.display = "block";
  }

  render() {
    return (
      <div className="MainContainer">
        <TopRow disabledIntro={this.state.intro} anxiousOnClick={() => this.deepBreath()} />
        
        {this.state.anxious ? 
          <AnxietyContainer /> : 
          <WorkoutContainer 
            chooseRandomWorkout={() => this.chooseWorkout()} 
            isAnxiousState={this.state.anxious}
            isIntroState={this.state.intro}
            workoutInfo={this.state.workout}
            repNumber={this.state.repNumber}
            buttonText={this.state.buttonText}
          />
        }
        <Footer />
      </div>
    )
  }

}

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

export default MainContainer;