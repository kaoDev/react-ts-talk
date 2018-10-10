import * as React from "react"
import {
  Text,
  Heading,
  Slide,
  Appear,
  Cite,
  Quote,
  Image,
  Link
} from "spectacle"

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      A bit Later
    </Heading>
    <Appear>
      <Text textColor="secondary">
        Get angry about missing type definitions of npm packages
      </Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        join thousands of contributors and extend the{" "}
        <Link
          textColor="quarternary"
          href="https://github.com/DefinitelyTyped/DefinitelyTyped/"
        >
          Definitely Typed
        </Link>{" "}
        Repository
      </Text>
    </Appear>
  </Slide>
)
