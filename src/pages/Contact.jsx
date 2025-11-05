import React from 'react'
import Button from "../secondcomponents/button";
const Contact = () => {
  return (
      <div style={{ padding: 40 }}>
      <Button onClick={() => alert("Button works!")}>Click me!</Button>
    </div>
  )
}

export default Contact