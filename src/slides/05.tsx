import * as React from "react"
import { Slide, Appear, Quote, Cite, Text, Heading } from "spectacle"
import { Error } from "src/components/Error"

const notes = `
specially in the beginning annoying
<br>
but it has its benefits to reduce runtime errors
`

export default (
  <Slide notes={notes}>
    <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
      One part of TS is all about the <Error>squiggles</Error>
    </Heading>
    <Appear>
      <Text textColor="secondary">It marks potential and real bugs</Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">boils down to "fail fast"</Text>
    </Appear>
  </Slide>
)
