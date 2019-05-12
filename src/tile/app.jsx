import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../cuckoo/style.css'
import Cuckoo from './../cuckoo'
import bird2006 from './bird-2006.png'
import bird2007 from './bird-2007.png'
import bird2009 from './bird-2009.png'
import bird2010 from './bird-2010.png'
import bird2012 from './bird-2012.png'

import birdCard2006 from './card-2006.png'
import birdCard2007 from './card-2007.png'
import birdCard2009 from './card-2009.png'
import birdCard2010 from './card-2010.png'
import birdCard2012 from './card-2012.png'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  prompt(year) {
    const text = [
      `歴代の中で、いちばん好きな鳥は${year}版！`,
      `👇あなたのお気に入りはどれ？`,
      `${process.env.CUCKOO_HOST}/tile/card-${year}.html`
    ].join('\n');
    const url = Cuckoo.webIntentURL(text);
    window.open(url);
  }

  render() {
    return (
      <Cuckoo.Container>
        <Cuckoo.Tweet>
          <Cuckoo.Text>
            歴代いろんな鳥がいるわけですが、いちばん好きな鳥はどれですか？
          </Cuckoo.Text>
          <Card className="pt-2">
            <Row>
              <TileCol src={bird2006} onClick={() => { this.prompt('2006') }} />
              <TileCol src={bird2007} onClick={() => { this.prompt('2007') }} />
            </Row>
            <Row>
              <TileCol src={bird2009} onClick={() => { this.prompt('2009') }} />
              <TileCol src={bird2010} onClick={() => { this.prompt('2010') }} />
            </Row>
            <Row>
              <Col></Col>
              <TileCol src={bird2012} onClick={() => { this.prompt('2012') }} />
            </Row>
          </Card>
        </Cuckoo.Tweet>
        <Helmet>
          <meta name="twitter:image"
            content={`${process.env.CUCKOO_HOST}/tmpl/goldenweek.jpg`} />
        </Helmet>
      </Cuckoo.Container>
    );
  }
}

function TileCol({src, onClick, ...props}) {
  return (
    <Col>
      <Image src={src} fluid onClick={onClick} />
    </Col>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
