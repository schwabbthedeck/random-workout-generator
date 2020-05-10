import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AnxietyContainer extends React.Component {
  render() {

    return (
      <Container id="anxiety-container">
          <Row>
            <Col>
              <img alt="breathing-gif" src="https://media.giphy.com/media/krP2NRkLqnKEg/source.gif"></img>
              <p>
                <a href="https://giphy.com/gifs/help-satisfying-breathe-krP2NRkLqnKEg">via GIPHY</a>
              </p>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default AnxietyContainer;