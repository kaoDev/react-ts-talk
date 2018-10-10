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
import { images } from "src/images"

export default (
  <Slide>
    <Heading fit caps lineHeight={1} textColor="tertiary">
      How to start?
    </Heading>
    <Appear>
      <Image src={images.gradualProgress} />
    </Appear>
  </Slide>
)
