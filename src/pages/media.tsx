import React from 'react'
import { Media } from "../Media"

export default () => (
  <div>
    <>
      <Media at="sm">Hello mobile!</Media>
      <Media greaterThan="sm">Hello desktop!</Media>
    </>
  </div>
)