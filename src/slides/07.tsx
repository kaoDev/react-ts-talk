import * as React from "react"
import { Text, Heading, Slide, Appear, Cite, BlockQuote } from "spectacle"
const notes = `
the language tries to stay as close as possible to the javascript language
<br>
all js code is valid ts code
<br>
large community
<br>
pragmatic philosophy
`
export default (
  <Slide notes={notes}>
    <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
      more on the what part
    </Heading>
    <Appear>
      <BlockQuote>
        TypeScript is a typed superset of JavaScript that compiles to plain
        JavaScript.
        <Cite>typescriptlang.org</Cite>
      </BlockQuote>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        developed by Microsoft, opensource on github
      </Text>
    </Appear>
  </Slide>
)
