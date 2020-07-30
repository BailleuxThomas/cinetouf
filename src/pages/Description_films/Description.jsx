import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import RedirectAs404 from "../../utils/RedirectAs404";
import { Listmovie } from "../../utils/Films";
import { Helmet } from "react-helmet-async";

const Description_films = () => {
  let { movieId } = useParams();

  const movie = Listmovie.find(({ id }) => id === movieId);

  // console.log(movie);

  if (!movie) {
    return <RedirectAs404 />;
  }

  return (
    <>
      <Helmet>
        <title>{movie.nom} 🐷</title>
      </Helmet>
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
              width="100%"
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
            <h2 style={{ color: "white" }}>{movie.nom}</h2>
            <p style={{ color: "orange" }}>{movie.categorie}</p>
            <p style={{ color: "white" }}>{movie.description}</p>
            <p style={{ color: "white" }}>Réalisateur: {movie.realisateur}</p>
            <p style={{ color: "white" }}>Ma propre évaluation: {movie.star}</p>
            <p style={{ color: "white" }}>Date de sortie: {movie.exit_date}</p>
          </Col>
          <Col>
            <div>
              <img
                style={{ width: "22vw", margin: "0 0 0 70px" }}
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
                className="Image_acteur"
                src={movie.acteurs_image[0]}
                alt={movie.acteurs_nom[0]}
              />
              <img
                className="Image_acteur"
                src={movie.acteurs_image[1]}
                alt={movie.acteurs_nom[1]}
              />
              <img
                className="Image_acteur"
                src={movie.acteurs_image[2]}
                alt={movie.acteurs_nom[2]}
              />
              <img
                className="Image_acteur"
                src={movie.acteurs_image[3]}
                alt={movie.acteurs_nom[3]}
              />
              <img
                className="Image_acteur"
                src={movie.acteurs_image[4]}
                alt={movie.acteurs_nom[4]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Description_films;
