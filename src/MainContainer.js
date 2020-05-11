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
      anxious: false
    }
  }

  deepBreath() {
    this.setState({
      anxious: true
    });
  }

  render() {
    return (
      <div className="MainContainer">
        <TopRow anxiousOnClick={() => this.deepBreath()} />        
        {this.state.anxious ? <AnxietyContainer /> : <WorkoutContainer /> }
        <Footer />
      </div>
    )
  }

}

export default MainContainer;