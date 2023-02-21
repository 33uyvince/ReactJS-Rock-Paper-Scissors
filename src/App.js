import logo from "./logo.svg";
import rockImg from "./assets/rock.png";
import paperImg from "./assets/paper.png";
import scissorsImg from "./assets/scissor.png";
import "./App.css";
import { useState } from "react";

const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const choices = [rock, paper, scissors];

function App() {
    const [result, setResult] = useState(null);
    const [aiResult, setAiResult] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);

    const evaluate = (userChoice) => {
        const randomNumber = Math.floor(Math.random() * choices.length);
        const aiChoice = choices[randomNumber];
        setAiResult(aiChoice);
        if (aiChoice === userChoice) {
            setResult("Draw");
        } else if (
            (aiChoice === rock && userChoice === paper) ||
            (aiChoice === paper && userChoice === scissors) ||
            (aiChoice === scissors && userChoice === rock)
        ) {
            setResult("Win");
            setPlayerScore(playerScore + 1);
        } else {
            setResult("Lose");
            setAiScore(aiScore + 1);
        }
    };

    return (
        <div className="App">
            <h1>Rock, Paper, Scissors</h1>
            <h2>Play against AI</h2>
            <h3>Choose your pick</h3>
            <button
                onClick={function () {
                    evaluate(rock);
                }}
            >
                <img
                    className="choice-btn"
                    id="choice-btn-rock"
                    src={rockImg}
                    alt="rock"
                />
            </button>
            <button
                onClick={function () {
                    evaluate(paper);
                }}
            >
                <img
                    className="choice-btn"
                    id="choice-btn-paper"
                    src={paperImg}
                    alt="paper"
                />
            </button>
            <button
                onClick={function () {
                    evaluate(scissors);
                }}
            >
                <img
                    className="choice-btn"
                    id="choice-btn-scissor"
                    src={scissorsImg}
                    alt="scissor"
                />
            </button>
            <p id="player"></p>

            {aiResult && <p id="ai">AI: {aiResult}</p>}

            <p id="result"> {result}</p>
            <p>player score: {playerScore}</p>
            <p>ai score: {aiScore}</p>
            <button
                onClick={function () {
                    setPlayerScore(0);
                    setAiScore(0);
                    setResult(null);
                    setAiResult(null);
                }}
            >
                reset
            </button>
        </div>
    );
}

export default App;
