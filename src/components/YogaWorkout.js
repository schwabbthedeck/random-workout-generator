import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import yogaImage from './images/20BeginnerYogaPoses.png';
import yogaImage from './images/20BeginnerYogaPosesNumbered.png';

class YogaWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: true,
      buttonText: "Pick Me A Random Yoga Pose!",
      yogaPose: {}
    }
  }

  chooseYogaPose() {
    this.setState({
      intro: false,
      buttonText: "Choose a new yoga pose!",
      yogaPose: ChooseAYogaPose()
    });
  }

  render() {
    let yogaPoseContent, message;
    if(!this.state.intro) {
      const divImageStyle = {
        backgroundImage: 'url(' + yogaImage + ')',
        backgroundPosition: this.state.yogaPose.backgroundPosition,
        width: this.state.yogaPose.width,
        height: this.state.yogaPose.height,
        margin: 'auto',
        borderRadius: '10px'
      }
      message = "Hold pose 3-5 breaths. Pay attention to the way the pose makes your body feel.";
      yogaPoseContent = (
        <div>
          <h6>{this.state.yogaPose.poseName}</h6>
          <div style={divImageStyle}></div>
          <div><a href={this.state.yogaPose.url} target="_blank" rel="noopener noreferrer">More information about this pose</a></div>
        </div>
      );
    } else {
      message = "Gives you a random yoga pose to do as a stretch break."
    }
    return (
      <Container id="main-container" fluid>
        <Row className="intro-information">
          <Col>
            <div>
              <h4>Random Yoga Pose Selector</h4>
              <div>{message}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {yogaPoseContent}
          </Col>
        </Row>
        <Row className="random-button-row">
          <Col md={{ span: 8, offset: 2 }}>
            <Button className="random-button" variant="primary" size="lg" block
              onClick={() => this.chooseYogaPose()}>
              {this.state.buttonText}
            </Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

function ChooseAYogaPose() {
  const yogaPoses = [
    {
      poseName: "Mountain",
      backgroundPosition: "-82px -262px",
      width: "75px",
      height: "171px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#mountain"
    },
    {
      poseName: "Tree",
      backgroundPosition: "-215px -262px",
      width: "76px",
      height: "170px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#tree"
    },
    {
      poseName: "Chair",
      backgroundPosition: "-354px -259px",
      width: "75px",
      height: "170px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#chair"
    },
    {
      poseName: "Standing Fold",
      backgroundPosition: "-510px -269px",
      width: "65px",
      height: "160px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#standinghalfbend"
    },
    {
      poseName: "Down Dog",
      backgroundPosition: "-640px -272px",
      width: "140px",
      height: "155px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#downdog"
    },
    {
      poseName: "Plank",
      backgroundPosition: "-24px -467px",
      width: "157px",
      height: "155px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#plank"
    },
    {
      poseName: "Low Lunge",
      backgroundPosition: "-186px -467px",
      width: "155px",
      height: "155px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#lowlunge"
    },
    {
      poseName: "High Lunge",
      backgroundPosition: "-355px -465px",
      width: "130px",
      height: "155px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#highlunge"
    },
    {
      poseName: "Warrior I",
      backgroundPosition: "-498px -459px",
      width: "120px",
      height: "155px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#warrior1"
    },
    {
      poseName: "Warrior II",
      backgroundPosition: "-628px -472px",
      width: "166px",
      height: "144px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#warrior2"
    },
    {
      poseName: "Triangle",
      backgroundPosition: "-38px -670px",
      width: "144px",
      height: "150px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#triangle"
    },
    {
      poseName: "Cobra",
      backgroundPosition: "-186px -688px",
      width: "178px",
      height: "130px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#babycobra"
    },
    {
      poseName: "Locust",
      backgroundPosition: "-362px -688px",
      width: "174px",
      height: "128px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#locust"
    },
    {
      poseName: "Cat",
      backgroundPosition: "-530px -688px",
      width: "130px",
      height: "128px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#cat"
    },
    {
      poseName: "Cow",
      backgroundPosition: "-670px -682px",
      width: "130px",
      height: "128px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#cow"
    },
    {
      poseName: "Easy Seat",
      backgroundPosition: "-62px -862px",
      width: "98px",
      height: "122px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#easyseat"
    },
    {
      poseName: "Seated Twist",
      backgroundPosition: "-228px -862px",
      width: "115px",
      height: "124px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#halffish"
    },
    {
      poseName: "Hero",
      backgroundPosition: "-368px -862px",
      width: "88px",
      height: "120px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#hero"
    },
    {
      poseName: "Child's Pose",
      backgroundPosition: "-470px -872px",
      width: "144px",
      height: "110px",
      url: "https://yogarove.com/20-yoga-poses-for-beginners/#child"
    }
  ];

  var randomNumber = Math.floor(Math.random() * yogaPoses.length);
  return yogaPoses[randomNumber];
}

export default YogaWorkout;