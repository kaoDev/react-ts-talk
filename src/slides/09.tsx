import * as React from "react"
import {
  Text,
  Heading,
  Slide,
  Appear,
  Cite,
  BlockQuote,
  Image
} from "spectacle"

const notes = `
you get completely static analyzable UI code
`
export default (
  <Slide notes={notes}>
    <Heading fit caps lineHeight={1} textColor="tertiary">
      Because React is just Javascript
    </Heading>
  </Slide>
)
