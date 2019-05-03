import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet'
import { Row, Col, FormControl } from 'react-bootstrap';
import Cuckoo from './../cuckoo'
import img from './goldenweek.jpg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: '', todo: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  getTweetText(done, todo) {
    const doneText = done || '【〇〇〇〇】';
    const todoText = todo || '【〇〇〇〇する】'
    return `ゴールデンウィーク前半は、${doneText}でした。\n後半は${todoText}予定です。乞うご期待。`;
  }

  render() {
    const preview = this.getTweetText(this.state.done, this.state.todo);
    const isReady = this.state.done && this.state.todo;
    const text = preview + ` ${process.env.CUCKOO_HOST}/tmpl/index.html`
    const url = Cuckoo.webIntentURL(text);

    return (
      <Cuckoo.Container>
        <Cuckoo.Text>
          ゴールデンウィーク前半でやったことはなんですか？<br />
          後半でやりたいことは？<br />
          フォロワーにシェアしましょう！
        </Cuckoo.Text>
        <TextInput placeholder="前半にやったこと" name="done"
          value={this.state.done} onChange={this.handleChange} />
        <TextInput placeholder="後半にやりたいこと" name="todo"
          value={this.state.todo} onChange={this.handleChange} />
        <Cuckoo.RowBlock Component={FormControl}
          as="textarea" rows="4" value={preview} readOnly />
        <Cuckoo.Button disabled={!isReady} href={url}>ツイートする</Cuckoo.Button>
        <Helmet>
          <meta name="twitter:image"
            content={`${process.env.CUCKOO_HOST}/tmpl/goldenweek.jpg`} />
        </Helmet>
      </Cuckoo.Container>
        );
      }
    }

function TextInput({placeholder, value, onChange, name, ...props }) {
  return (
    <Cuckoo.RowBlock Component={FormControl}
          type="text" placeholder={placeholder}
          name={name} value={value} onChange={onChange} />
        );
      }

      ReactDOM.render(
  <App />,
        document.getElementById('app')
      );
