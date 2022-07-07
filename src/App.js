import { useEffect, useState } from "react";
import Wordle from './components/Worlde'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('https://desolate-sea-85910.herokuapp.com/solutions')
    .then(res => res.json())
    .then(json => {
      // console.log(json)
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.Solution)
    })
  }, [setSolution])
  return (
    <div className="App">
      <h1>NERDLE</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App

