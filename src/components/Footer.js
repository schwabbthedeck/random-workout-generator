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
            <Col>Sound from <a href="https://www.zapsplat.com">Zapsplat.com</a></Col>
            <Col>
              &#169;2020 <a href="https://janeschwab.co">janeschwab.co</a>
            </Col>
            <Col>
              <a href="https://github.com/schwabthedeck/random-workout-generator">
                <FontAwesomeIcon icon={faGithub}/> Source
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;