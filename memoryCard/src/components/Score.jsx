import '../styles/Score.css'
export default function Score({ currentScore, bestScore }){

    return(
    
    <div className="scoreContainer">
        <div className="score"><span className="title">Current score:</span> {currentScore}</div>
        <div className="score"><span className="title">Best score:</span> {bestScore}</div>
    </div>)
}