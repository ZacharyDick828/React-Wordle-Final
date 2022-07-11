import React, { useEffect, useState } from 'react'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('https://nerdle-server.herokuapp.com/letters', { mode: 'no-cors'} )
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}