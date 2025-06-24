import '../styles/App.css'
import CardGrid from './CardGrid'
import Score from './Score'
import { useState } from 'react'

function App() {

    const [clicked, setClicked] = useState([])
    const [bestScore, setBestScore] = useState(0)



    function updateScore(item){
      console.log("Clicked:", clicked)
      console.log("BestScore:", bestScore)
      const alreadyClicked = clicked.includes(item)
      if(!alreadyClicked){
        const newClicked = [...clicked, item]
        setClicked(newClicked)
      }
      else{
        if(clicked.length > bestScore){
          setBestScore(clicked.length)
        }
        setClicked([])
      }

    }

  return (
    <div className='container'>
      <h1 className="header">Pokemon Memo Cards</h1>
      <Score currentScore={clicked.length} bestScore={bestScore}/>
      <CardGrid updateScore={updateScore}/>
    </div>

  )
}

export default App
