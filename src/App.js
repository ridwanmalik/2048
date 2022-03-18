import { useState } from 'react'
export default function App() {
  const [slideCount, setSlideCount] = useState(4)
  return (
    <div className="App">
      <div className="board">
        { Array.from(Array(Math.pow(slideCount, 2)).keys()).map(i => (
          <div className="box"></div>
        )) }
        <div className="tile"></div>
      </div>
    </div>
  )
}
