import * as React from "react"
import { Text, Heading, Slide, Appear, Cite, Quote, Image } from "spectacle"

export default (
  <Slide>
    <Heading size={3} caps lineHeight={1} textColor="tertiary">
      More steps
    </Heading>
    <Appear>
      <Text textColor="secondary">choose the level of strictness</Text>
    </Appear>
    <Appear>
      <Text textColor="secondary">
        tsconfig.json can go from{" "}
        <Appear>
          <Quote textColor="secondary">hey I found a little typo for you</Quote>
        </Appear>
        <Appear>
          <span>to</span>
        </Appear>
        <Appear>
          <Quote textColor="red">
            WTF ARE YOU DOING, THIS SHIT WILL NEVER WORK!!!!!
          </Quote>
        </Appear>
      </Text>
    </Appear>
  </Slide>
)
