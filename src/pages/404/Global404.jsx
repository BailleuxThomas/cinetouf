import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Global404 = () => {
  const history = useHistory();

  function goBackHandle() {
    history.goBack();
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2 style={{ color: "red", margin: "40px 0 5px" }}>
              Page not found
            </h2>
            <button onClick={goBackHandle}> Go Back</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Global404;
