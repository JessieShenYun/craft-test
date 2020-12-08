import React from 'react'
import { Paper } from '@material-ui/core'

export default function Container({ background, padding = 0, children }: any ) {
  return (
    <Paper style={{ margin: '5px 0', background, padding: `${padding}px` }}>
      {children}
    </Paper>
  )
}