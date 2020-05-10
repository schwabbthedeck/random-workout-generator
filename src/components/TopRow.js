import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MoveReminder from './MoveReminder';

class TopRow extends React.Component {
  render() {
    return (
      <Container fluid className="top-row">
        <Row>
          <Col xsm={4}>
            <Button className="reset-button" variant="outline-primary" size="sm"
              onClick={() => window.location.reload(false)}
              disabled={this.props.disabledIntro}>
              Reset
            </Button>
          </Col>
          <Col xsm={4}>
            <MoveReminder />
          </Col>
          <Col xsm={4}>
            <Button className="anxiety-button" variant="warning" size="sm"
              onClick={this.props.anxiousOnClick}>
              Help, I'm Anxious!
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TopRow;