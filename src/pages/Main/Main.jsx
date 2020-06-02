import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import RiotGame from "../../components/atoms/RiotGame";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Badge pill variant="info" style={{ margin: "50px 0 0 0" }}>
            Info
          </Badge>
          <p style={{ margin: "15px 0", color: "yellow" }}>
            Ici tu trouveras des films, des séries que j'ai visionné ainsi que
            ma cote, des streamers que j'aime regarder et peut être d'autre
            truc.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Main;
