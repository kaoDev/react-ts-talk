import * as React from "react"
import { Deck } from "spectacle"

import createTheme from "spectacle/lib/themes/default"
import "./images"

require("normalize.css")

const light = "rgb(225, 225, 225)"
const dark = "rgb(53,53,53)"
const accent01 = "rgb(0, 115, 209)"
const accent02 = "rgb(229, 195, 9)"
const accent03 = "rgb(229, 100, 9)"

const lightTheme = [
  {
    primary: light,
    secondary: dark,
    tertiary: accent01,
    quarternary: accent03
  },
  {
    primary: {
      name: "Signika",
      googleFont: true,
      styles: ["300", "400"]
    },
    secondary: {
      name: "Montserrat",
      googleFont: true,
      styles: ["300", "400"]
    },
    tertiary: {
      name: "'Dank Mono', monospace",
      styles: ["300", "400"]
    }
  }
]

const darkTheme = [
  {
    primary: dark,
    secondary: light,
    tertiary: accent01,
    quarternary: accent02
  },
  {
    primary: {
      name: "Signika",
      googleFont: true,
      styles: ["300", "400"]
    },
    secondary: {
      name: "Montserrat",
      googleFont: true,
      styles: ["300", "400"]
    },
    tertiary: {
      name: "'Dank Mono', monospace",
      styles: ["300", "400"]
    }
  }
]

const theme = createTheme(...darkTheme)
interface State {
  // tslint:disable-next-line:no-any
  slides?: React.ReactElement<any>[]
}

export class Presentation extends React.Component<{}, State> {
  state: State = {}

  componentDidMount() {
    const slidesContext = require.context("./slides", true, /(.*\/.*.tsx)$/)
    const loadedSlides = slidesContext
      .keys()
      // tslint:disable-next-line:no-any
      .reduce<React.ReactElement<any>[]>((acc, id) => {
        const slideModule = slidesContext(id).default
        // I want to allow a folder which holds slides so I can group parts of the preso
        // making it easier to re-organise.
        if (slideModule instanceof Array) {
          slideModule.forEach(sm => acc.push(sm))
        } else {
          acc.push(slideModule)
        }
        return acc
      }, [])

    this.setState({
      slides: loadedSlides
    })
  }
  render() {
    if (!this.state.slides) {
      return <div>Loading...</div>
    }

    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {this.state.slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index })
        })}
      </Deck>
    )
  }
}
