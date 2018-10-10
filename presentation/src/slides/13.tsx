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

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      Next Steps
    </Heading>
    <Appear>
      <Text textColor="quarternary" textFont="tertiary">
        $ tsc --init
      </Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">rename files to *.ts / *.tsx</Text>
    </Appear>
    <Appear>
      <Text margin="50px auto" textColor="quarternary" textFont="tertiary">
        npx create-react-app my-app --scripts-version=react-scripts-ts
      </Text>
    </Appear>
  </Slide>
)
