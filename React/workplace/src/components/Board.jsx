import {Square, Status} from "./index";
import { useState } from "react";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const handleClick = (i) => {
        squares[i] = xIsNext ? "X" : "O"
        setSquares(squares)
        setXIsNext(prevState => !prevState)
    }

    const renderSquare = (i) => {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
    }

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i]
            if (squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    // const status = () => {
    //     const winner = calculateWinner(squares)
    //     let text
    //     if (winner) {
    //         text =  "Winner：" + winner
    //     } else {
    //         text =  "Next player：" + (xIsNext ? "X" : "O")
    //     }
    //     return (
    //         <Status status={text}/>   
    //     )
    // }
    const winner = calculateWinner(squares)
    let status 
    if (winner) {
        status = "Winner：" + winner
    } else {
        status = "Next player：" + (xIsNext ? "X" : "O")
    }

    return (
        <div>
            <Status status={status}/>   
            {/* {status} */}
            {/* <div className="status">{status}</div> */}
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
      </div>
    )
}

export default Board;