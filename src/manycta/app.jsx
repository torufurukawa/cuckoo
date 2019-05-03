import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import Cuckoo from './../cuckoo'
import img from './heisei.jpg'

const url = process.env.CUCKOO_HOST + '/manycta/index.html';
const data = {
  message: `実を言うと平成はもうだめです。突然こんなこと言ってごめんね。でも本当です。
外では、うかれて騒いでる連中がいるから気をつけて。そして5月1日からは令和になります。
あなたが平成最後にやりたいことは何ですか？`,
  mediaFileName: img,
  ctas: [
    {
      'label': '#現金を下ろす でツイート',
      'text': 'やばい、#平成最後 とか言ってる場合じゃない。銀行に行って、 #現金を下ろす のが最優先！急げ！ ' + url
    },
    {
      'label': '#猫を見る でツイート',
      'text': '#平成最後 だろうが最初だろうが、今日も #猫を見る だけ。癒しこそ正義。 ' + url
    },
    {
      'label': '#布団から出る でツイート',
      'text': 'え、もうすぐ #平成最後 の朝なの？ やべぇ、なんとか #布団を出る という大事業をなして遂げよう  ' + url
    },
    {
      'label': '#退位 でツイート',
      'text': '令和になる前の、 #平成最後 のタスクは #退位 に決まってんだろ。 ' + url
    },
    {
      'label': 'その他 でツイート',
      'text': '私が #平成最後 にやることは【ここにやることを入れてね！】です。 ' + url
    }
  ]
};

function App(props) {
  const imageURL = `${process.env.CUCKOO_HOST}/manycta/heisei.jpg`;
  return (
    <Cuckoo.Container>
      <Cuckoo.Tweet>
        <Cuckoo.Text>{props.data.message}</Cuckoo.Text>
        <Cuckoo.Card>
          <Cuckoo.Media src={props.data.mediaFileName} />
          <ButtonList ctas={props.data.ctas} />
        </Cuckoo.Card>
      </Cuckoo.Tweet>
      <Helmet>
        <meta name="twitter:image" content={imageURL} />
      </Helmet>
    </Cuckoo.Container>
  );
}

function ButtonList({ ctas }) {
  const buttons = ctas.map((cta, i) => (
    <Cuckoo.Button key={i} href={Cuckoo.webIntentURL(cta.text)}>
      {cta.label}
    </Cuckoo.Button>
  ));
  return buttons;
}

ReactDOM.render(
  <App data={data} />,
  document.getElementById('app')
);
