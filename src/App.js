import { useEffect, useState } from "react";
import Wordle from './components/Worlde'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json => {
      // console.log(json)
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  }, [setSolution])
  return (
    <div className="App">
      <h1>Wordle (Comics)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App

