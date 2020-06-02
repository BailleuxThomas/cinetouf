import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import StreamerCard from "../../atoms/StreamerCard";
import { streamers } from "../../../utils/staticList";

const Nav = () => {
  const allStreamers = streamers.map((streamerName, index) => (
    <StreamerCard key={`streamer-${index}`} streamerName={streamerName} />
  ));

  return (
    <Container>
      <Row>
        <Col>
          <h2>
            <strong className="nav-color">CINE</strong> TOUF
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <nav>
            <ul>
              <li>
                <Link className="lien-nav" to="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="lien-nav" to="/films">
                  Films
                </Link>
              </li>
              <li>
                <Link className="lien-nav" to="/series">
                  Séries
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col>
          <div className="flexAccueil">{allStreamers}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
