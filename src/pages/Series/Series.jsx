import React from "react";
import { Listserie } from "../../utils/Series";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContenuSerie = Listserie.map((article) => (
  <Link
    key={`seriesContent-${article.id}`}
    to={`/description_serie/${article.id}`}
  >
    <Card>
      <div className="image">
        <Card.Img id="togg1" src={article.image} />
      </div>
    </Card>
  </Link>
));

const Series = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <CardDeck>{ContenuSerie}</CardDeck>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Series;
