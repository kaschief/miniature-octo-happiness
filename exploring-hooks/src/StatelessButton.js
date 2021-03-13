import React, { useState } from 'react'


export default function StatelessButton () {
  const [buttonText, setButtonText] = useState("Click me please")

  return (
    <button onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  )
}