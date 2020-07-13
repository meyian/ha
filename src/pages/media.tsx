import React from 'react'
import { Media, MediaContextProvider } from "../Media"

export default () => (
  <div>
    <MediaContextProvider>
      <Media at="sm">Hello mobile!</Media>
      <Media greaterThan="sm">Hello desktop!</Media>
    </MediaContextProvider>
  </div>
)