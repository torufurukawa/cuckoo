import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSButton, Col, Image, Row, } from 'react-bootstrap';

/**
 * Container contains a tweet.
 */
export class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="container cuckoo">{this.props.children}</div>
  }
}

/**
 * Tweet represents a tweet.
 */
export class Tweet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

/**
 * Card repesents a card inside a tweet.
 */
export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

/**
 * Media component represents media, either image or video inside a card.
 */
export class Media extends React.Component {
  static propTypes = {
    /** src is the URL of an image */
    src: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image className="card-img-top" src={this.props.src} />
    );
  }
}

/**
 * Button represents a button inside a single-column row.
 *
 * You can pass any parameters defined by react-bootstrap Button.
 * By default the variant is outline-primary.
 * If you specify submit property, the variant is primary.
 */
function Button({ submit, ...props }) {
  const variant = submit ? 'primary' : 'outline-primary';
  return (
    <RowBlock Component={BSButton} variant={variant} block {...props} />
  );
}

function RowBlock({Component, ...props}) {
  return (
    <Row>
      <Col>
        <Component {...props} />
      </Col>
    </Row>
  );
}

/**
 * Text component represents a Tweet text.
 */
function Text(props) {
  return (
    <Row>
      <Col>
        {props.children}
      </Col>
    </Row>
  );
}

/** Create Web Intent URL to tweet `text` */
function webIntentURL(text) {
  const param = encodeURIComponent(text);
  return 'https://twitter.com/intent/tweet?text=' + param;
}

const Cuckoo = {
  Container,
  Tweet,
  Card,
  Media,
  Text,
  Button,
  webIntentURL,
  RowBlock
}

export default Cuckoo;
