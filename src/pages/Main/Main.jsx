import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Touftouf from "./bbq_thomas.mp4";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Badge pill variant="info" style={{ margin: "50px 0 0 0" }}>
              Info
            </Badge>
            <p style={{ margin: "15px 0", color: "white" }}>
              Bienvenue sur <q style={{ color: "red" }}>Cine</q>
              <q style={{ color: "yellow" }}>Touf</q> ici vous trouverez des
              films, des séries que j'ai visionné ainsi qu'une appréhension. Si
              vous regardez vers le menu à droite, vous trouverez des streamers
              que j'aime bien.
            </p>
            <Badge variant="warning">Warning</Badge>{" "}
            <Badge variant="danger">Danger</Badge>{" "}
            <p
              style={{
                margin: "15px 0",
                color: "red",
                fontSize: "20px",
              }}
            >
              Mon site n'est pas encore responsive
            </p>
            <Badge variant="primary">Question?</Badge>{" "}
            <p style={{ color: "cyan", margin: "10px 0" }}>
              Pourquoi ce type de projet ?
            </p>
            <p style={{ color: "white" }}>
              C'est un projet qui me tient à cœur, beaucoup de mes amis me
              demandes toujours un film, série à conseiller, pourquoi ne pas
              faire un site, qui leur permettrait directement de choisir ce
              qu'ils veulent... Et aussi parce que je recherche un emploi en
              tant que web développeur, pour l'instant je travaille en tant que
              préparateur de commande, mais ce n'est pas le boulot de mes rêves.
            </p>
          </Col>
          <Col>
            <video
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100%" }}
            >
              <source src={Touftouf} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
