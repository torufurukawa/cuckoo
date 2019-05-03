import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Content title="Many-CTA Convo Card" href="./manycta/">
            Allows developers to declare 5+ CTAs,
            so that users have more options such as nations, regions, players, etc.
          </Content>
        </Col>
        <Col>
          <Content title="Sequential Convo Card" href="./seq/">
            Allows to create multiple CTA sets which users follow sequentially.
            Developers can declare prompt tweet texts that depend on
            the user selection combination.
          </Content>
        </Col>
      </Row>
      <Row>
        <Col>
          <Content title="Template Filler" href="./tmpl/" >
            Allows users to input own texts and to fill the pre-defined template.
            The users are assisted by the template to generate their own tweet.
          </Content>
        </Col>
        <Col>
          <Content title="Tile Convo Card" href="./tile/" >
            Allows to create tile-style CTAs so that your CTAs look more visible.
            Useful when options are about visual.
          </Content>
        </Col>
      </Row>
    </Container>
  );
}

function Content({ title, desc, href, ...props }) {
  return (
    <Card className="h-100">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.children}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white">
        <Button variant="link" href={href}>See example</Button>
      </Card.Footer>
    </Card>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
