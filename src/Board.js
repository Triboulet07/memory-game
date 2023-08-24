import Square from "./Square";

const Board = ({board, openCard}) => {
    return (
        <div className='board'>
            {board.map(el => <Square card={el} openCard={openCard} /> )}

        </div>
    )
}
export default Board;