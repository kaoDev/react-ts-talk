import styled from "react-emotion"
import { images } from "src/images"

export const Error = styled("span")({
  display: "inline-block",
  position: "relative",
  background: `url(${images.squiggle}) bottom repeat-x`
})
