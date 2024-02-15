import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

function RenderTimer() {
  const [count, setCount] = useState(10);

  // With empty array as 2nd parameter, it'll only trigger on component mount.
  useEffect(() => {
    // Debug
    //console.log("[On Mount] Timer Init.");

    const timerId = setInterval(() => {
      setCount((previousCount) => previousCount - 1);
    }, 1000);

    return (() => {
      // Debug
      //console.log("[On Dismount] Timer Clear.");

      clearInterval(timerId);
    });
  }, []);

  return (
    <>
      <div>Time Remaining to re-query: {count} second(s).</div>
    </>
  );
}

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const onToggleTimer = () => setShowTimer(!showTimer);

  return (
    <>
      <Container fluid className="d-flex flex-column justify-content-center">
        <Row className="mt-3">
          <Col className="col-12 d-flex justify-content-center">
            <h1>React Timer App</h1>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="col-12 d-flex justify-content-center">
            {/*RenderTimer(showTimer, count)*/}
            {showTimer ? <RenderTimer /> : null}
          </Col>
        </Row>

        <Row>
          <Col className="col-12 d-flex justify-content-center">
            <Button variant="primary" onClick={onToggleTimer}>
              {showTimer ? 'Hide Timer' : 'Show Timer'}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
