import React from "react";
import { Listmovie } from "../../utils/Films";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";

// console.log(Listmovie);
// console.log(Listmovie[1]);

const ContenuFilm = Listmovie.map((article) => (
  <Link
    key={`filmContent-${article.id}`}
    to={`/description_film/${article.id}`}
  >
    <Card>
      <div className="image">
        <Card.Img className="image" src={article.image} />
      </div>
    </Card>
  </Link>
));

const Films = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardDeck>{ContenuFilm}</CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Films;
