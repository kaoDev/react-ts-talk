import * as React from "react"
import { Slide, Appear, Quote, Cite, Text, Heading } from "spectacle"

export default (
  <Slide>
    <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
      The other part is more constructive
    </Heading>
    <Appear>
      <Text textColor="secondary">
        The compiler understands a lot of your code
      </Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        You don't have to keep everything in your head
      </Text>
    </Appear>
  </Slide>
)
