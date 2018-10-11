import * as React from "react"
import { Heading, Text, Appear, Slide } from "spectacle"
const notes = "and what is it?"
export default (
  <Slide notes={notes}>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Why TypeScript?
    </Heading>
    <Appear>
      <Text textColor="tertiary">and what is it?</Text>
    </Appear>
  </Slide>
)
