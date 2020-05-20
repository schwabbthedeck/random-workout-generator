import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <div className="bottom">
                <a href="https://github.com/schwabthedeck/random-workout-generator">
                  <FontAwesomeIcon icon={faGithub} /> Source
                </a>
              </div>
            </Col>
            <Col>
              <div className="bottom">&#169;2020 <a href="https://janeschwab.co">janeschwab.co</a></div>
            </Col>
            <Col>
              <div className="bottom">
                <div>Sound from <a href="https://www.zapsplat.com" target="_blank" rel="noopener noreferrer">Zapsplat.com</a></div>
                <div>Yoga information from <a href="https://yogarove.com/" target="_blank" rel="noopener noreferrer">yogarove.com</a></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;