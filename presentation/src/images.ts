import preloader from "spectacle/lib/utils/preloader"

export const images = {
  squiggle: require("./assets/squiggle.gif"),
  gradualProgress: require("./assets/gradual-progress.gif")
}

preloader(images)
