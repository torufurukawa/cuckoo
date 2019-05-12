import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../cuckoo/style.css'
import Cuckoo from './../cuckoo'
import img from './beer.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, nation: '', color: '', style: '' };
    this.handleNation = this.handleNation.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
  }

  handleNation(val) {
    this.setState({ activeIndex: 1, nation: val });
  }

  handleColor(val) {
    this.setState({ activeIndex: 2, color: val });
  }

  handleStyle(val) {
    this.setState({ activeIndex: 3, style: val });
  }

  getWebIntentURL(beer) {
    const siteURL = `${process.env.CUCKOO_HOST}/seq/index.html`;
    const text = `#令和 最初のビールは「${beer}」で決まり！ビールに詳しくなくても大丈夫な、ビール診断で教えてもらったよ。 ${siteURL}`
    const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text);
    return url;
  }

  render() {
    const beer = `${this.state.nation}・${this.state.color}・${this.state.style}`;
    const url = this.getWebIntentURL(beer);
    const imageURL = `${process.env.CUCKOO_HOST}/seq/beer.jpg`;

    return (
      <Cuckoo.Container>
        <Cuckoo.Tweet>
          <Cuckoo.Text>
            あなたにピッタリのビールを提案します🍻 ビールに詳しくなくても大丈夫です👌
          </Cuckoo.Text>
          <Cuckoo.Card>
            <Cuckoo.Media src={img} />
            <Card.Body>
              <Carousel
                activeIndex={this.state.activeIndex}
                onSelect={() => { }}
                interval={null} controls={false} indicators={false}>
                <Carousel.Item>
                  <Question
                    text="好きな国は？"
                    options={[
                      { label: 'アメリカ', value: 'アメリカン' },
                      { label: 'インド', value: 'インディア' },
                      { label: 'ドイツ', value: 'ジャーマン' },
                      { label: 'ベルギー', value: 'ベルジャン' }]}
                    handler={this.handleNation} />
                </Carousel.Item>
                <Carousel.Item>
                  <Question
                    text="好きな色は？"
                    options={[
                      { label: '金色', value: 'ゴールデン' },
                      { label: '茶色', value: 'ペール' },
                      { label: '黒色', value: 'ダーク' }
                    ]}
                    handler={this.handleColor} />
                </Carousel.Item>
                <Carousel.Item>
                  <Question
                    text="好きな原料と発酵方法は？"
                    options={[
                      { label: '大麦 + 上面発酵', value: 'エール' },
                      { label: '大麦 + 下面発酵', value: 'ラガー' },
                      { label: '小麦 + 上面発酵', value: 'ヴァイツェン' }
                    ]}
                    handler={this.handleStyle} />
                </Carousel.Item>
                <Carousel.Item>
                  <Cuckoo.Text>
                    診断結果が出ました！ <br />
                    令和最初のビールは、あなたが深層心理で求めている<br />
                    「{beer}」<br />
                    で決まり！
                  </Cuckoo.Text>
                  <Cuckoo.Button href={url} submit>結果をツイートする</Cuckoo.Button>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Cuckoo.Card>
        </Cuckoo.Tweet >
        <Helmet>
        <meta name="twitter:image" content={imageURL} />
        </Helmet>
      </Cuckoo.Container >
    )
  }
}

function Question({ text, options, handler, ...props }) {
  let buttons = options.map((option, index) => {
    return (
      <Cuckoo.Button key={index} onClick={() => handler(option.value)}>
        {option.label}
      </Cuckoo.Button>
    );
  })
  const children = [text].concat(buttons);
  return children;
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
