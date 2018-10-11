import * as React from "react"
import { Heading, Slide, Appear } from "spectacle"
import styled from "react-emotion"

const GiphyWrapper = styled("div")({
  width: "100%",
  height: 0,
  paddingBottom: "75%",
  position: "relative"
})

const GiphyFrame = styled("iframe")({
  position: "absolute",
  left: 0,
  right: 0
})

export default (
  <Slide>
    <Heading fit caps lineHeight={1} textColor="tertiary">
      How to start?
    </Heading>
    <Appear>
      <GiphyWrapper>
        <GiphyFrame
          src="https://giphy.com/embed/3o7buaLcpYwvUT0kTK"
          width="100%"
          height="100%"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
      </GiphyWrapper>
    </Appear>
  </Slide>
)
