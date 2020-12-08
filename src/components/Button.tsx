import React from 'react'
import { Button as MaterialButton } from '@material-ui/core'

export default function Button({ size, variant, color, children }: any) {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  )
}