import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import RedirectAs404 from "../../utils/RedirectAs404";
import { Listmovie } from "../../utils/Films";

const Description_films = () => {
  let { movieId } = useParams();

  const movie = Listmovie.find(({ id }) => id === movieId);

  // console.log(movie);

  if (!movie) {
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
            title={`Youtube vidéo of ${movie.nom}`}
            width="940"
            height="528"
            src={movie.youtube}
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
          <h2 style={{ color: "yellow", size: "70px" }}>{movie.nom}</h2>
          <p style={{ color: "orange" }}>{movie.categorie}</p>
          <p style={{ color: "yellow" }}>{movie.description}</p>
          <p style={{ color: "yellow" }}>Réalisateur: {movie.realisateur}</p>
          <p style={{ color: "yellow" }}>Ma propre évaluation: {movie.star}</p>
          <p style={{ color: "yellow" }}>Date de sortie: {movie.exit_date}</p>
        </Col>
        <Col>
          <div>
            <img
              style={{ width: "300px", margin: "0 0 0 70px" }}
              src={movie.image}
              alt={movie.alt}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <img
              style={{
                width: "120px",
                height: "160px",
                margin: "10px 10px 10px 0",
                border: "1px solid transparent",
                borderRadius: "35%",
              }}
              src={movie.acteurs_image[0]}
              alt={movie.acteurs_nom[0]}
            />
            <img
              style={{
                width: "120px",
                height: "160px",
                margin: "10px 10px 10px 0",
                border: "1px solid transparent",
                borderRadius: "35%",
              }}
              src={movie.acteurs_image[1]}
              alt={movie.acteurs_nom[1]}
            />
            <img
              style={{
                width: "120px",
                height: "160px",
                margin: "10px 10px 10px 0",
                border: "1px solid transparent",
                borderRadius: "35%",
              }}
              src={movie.acteurs_image[2]}
              alt={movie.acteurs_nom[2]}
            />
            <img
              style={{
                width: "120px",
                height: "160px",
                margin: "10px 10px 10px 0",
                border: "1px solid transparent",
                borderRadius: "35%",
              }}
              src={movie.acteurs_image[3]}
              alt={movie.acteurs_nom[3]}
            />
            <img
              style={{
                width: "120px",
                height: "160px",
                margin: "10px 10px 10px 0",
                border: "1px solid transparent",
                borderRadius: "35%",
              }}
              src={movie.acteurs_image[4]}
              alt={movie.acteurs_nom[4]}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Description_films;
