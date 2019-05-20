# Cuckoo

Cuckoo is a collection of Twitter post-click experience helpers.


# Example

```
import React from 'react'
import { render } from 'react-dom'

// You will need this CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import Cuckoo from '@torufurukawa/cuckoo'
import '@torufurukawa/cuckoo/dist/style.css'

function App() {
  return (
    <Cuckoo.Container>
      <Cuckoo.Text>This is text field.</Cuckoo.Text>
      <Cuckoo.Button href={Cuckoo.linkToTweet('hello')}>Tweet hello</Cuckoo.Button>
    </Cuckoo.Container>
  )
}
render(<App />, document.getElementById('root'))
```
