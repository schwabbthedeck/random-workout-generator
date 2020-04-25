import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Col></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;