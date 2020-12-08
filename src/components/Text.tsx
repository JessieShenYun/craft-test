import React from 'react'

export default function Text({ text, fontSize}: any) {
  return (
    <div>
      <p style={{fontSize}}>{text}</p>
    </div>
  )
}