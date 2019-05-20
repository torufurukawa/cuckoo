import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cuckoo from '../../src'
import '../../src/style.css'

function App() {
  return (
    <Cuckoo.Container>
      <Cuckoo.Text>This is text field.</Cuckoo.Text>
      <Cuckoo.Button href={Cuckoo.linkToTweet('hello')}>Tweet hello</Cuckoo.Button>
    </Cuckoo.Container>
  )
}
render(<App />, document.getElementById('root'))
