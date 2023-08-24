import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Board from "./Board";


function App() {
    const [board , setBoard] = useState(Array(12).fill({}).map(el => ({value:null, id:uuidv4() , isOpen:false})))
    const [history , setHistory] = useState([])


  const emoji = ['🐬', '🐍', '🏄', '⛵', '🌺', '🌴'];


    const fillArray = () => {

        const newBoard = [...board];
        const indexCheckEmoji = {
            0:0,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0
        }
            for(let i = 0; i < board.length;i++) {
                let index = 0;
                do {
                    index = Math.floor(Math.random() * emoji.length)
                } while (indexCheckEmoji[index] === 2)
                newBoard[i].value = emoji[index]
                indexCheckEmoji[index] = indexCheckEmoji[index] + 1

            }
                setBoard(newBoard);
    }
    useEffect(() => {
        fillArray()
    }, []);

   const openCard = (id , value) => {
        const newBoard =  board.map(el => el.id === id ? {...el , isOpen: true} : el)
       setBoard(newBoard)

       setHistory([...history , value])
   }
    console.log(board)

    const checkMoove = () => {
        if(history.length % 2 === 0) {
            if (history[history.length - 2] !== history[history.length - 1]) {
                setTimeout(() => {
                    const newBoard = board.map(el =>
                        el.value === history[history.length - 2] ||
                        el.value === history[history.length - 1] ? {...el , isOpen: false} : el
                    )
                    setBoard(newBoard)
                }, 300)
            }
        }
    }
    useEffect(() => {
        checkMoove()


    }, [history]);
  return (
    <div className='App'>
        <h1>Memory - Game</h1>
           <Board
               board={board}
               openCard={openCard}

           />

    </div>
  );
}

export default App;
