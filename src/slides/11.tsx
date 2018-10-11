import * as React from "react"
import {
  Text,
  Heading,
  Slide,
  Appear,
  Cite,
  BlockQuote,
  Image,
  
} from "spectacle"

const notes = `
//@ts-check
</br>
$ npm i -D typescript
`

export default (
  <Slide notes={notes} >
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      TypeScript in JS
    </Heading>
    <Appear>
      <Text textColor="quarternary" textFont="tertiary" >//@ts-check</Text>
    </Appear>
    <Appear>
      <Text textColor="quarternary" textFont="tertiary">$ npm i -D typescript</Text>
    </Appear>
  </Slide>
)
