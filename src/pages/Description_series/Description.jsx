import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import RedirectAs404 from "../../utils/RedirectAs404";
import { Listserie } from "../../utils/Series";

const Description_serie = () => {
  let { serieId } = useParams();

  const serie = Listserie.find(({ id }) => id === serieId);

  console.log(serie);

  if (!serie) {
    return <RedirectAs404 />;
  }
  return (
    <Container
      style={{
        marginTop: "75px",
        // boxShadow: "0px 20px 50px rgba(59, 43, 91, 0.7)",
      }}
    >
      <Row>
        <Col>
          <iframe
            title={`Youtube vidéo of ${serie.nom}`}
            width="940"
            height="528"
            src={serie.youtube}
            frameborder="0"
            allow="accelerometer;
    autoplay; encrypted-media;
    gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ color: "yellow", size: "70px" }}>{serie.nom}</h2>
          <p style={{ color: "orange" }}>{serie.categorie}</p>
          <p style={{ color: "yellow" }}>{serie.description}</p>
          <p style={{ color: "yellow" }}>Réalisateur: {serie.realisateur}</p>
          <p style={{ color: "yellow" }}>Ma propre évaluation: {serie.star}</p>
          <p style={{ color: "yellow" }}>Date de sortie: {serie.exit_date}</p>
        </Col>
        <Col>
          <div>
            <img
              style={{ width: "300px", margin: "0 0 0 70px" }}
              src={serie.image}
              alt={serie.alt}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Description_serie;
