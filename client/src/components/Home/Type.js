import React from 'react'
import Typewriter from 'typewriter-effect'

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Full Stack Developer 💻',
          'Passionated ❤️',
          'Hard Worker 😌',
          'Enthusiastic Dev 😁',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
