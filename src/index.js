import React from 'react';
import { Container as BootstrapContainer } from 'react-bootstrap'
import { Button as BoostrapButton } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

function Container(props) {
  const children = props.children.map ? props.children : [props.children]

  return (
    <div className="cuckoo">
      <BootstrapContainer>
        {children.map((child, index) => (
          <Row key={index}>
            <Col>
              {child}
            </Col>
          </Row>
        ))}
      </BootstrapContainer>
    </div>
  )
}

function Text(props) {
  return(
    <div style={{ whiteSpace: 'pre-line' }} >
      {props.children}
    </div>
  )
}

function Button(props) {
  return (
    <BoostrapButton variant="outline-primary" block {...props}>
      {props.children}
    </BoostrapButton>
  )
}

function linkToTweet(text) {
  return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text)
}

const Cuckoo = {
  Container,
  Text,
  Button,
  linkToTweet
}
export default Cuckoo
