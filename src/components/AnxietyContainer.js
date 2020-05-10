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
    );
  }
}

export default AnxietyContainer;