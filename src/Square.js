import React from "react";

const Square = (props) => {
    return (
        <button
            onClick={() => props.openCard(props.card.id, props.card.value)}
        >
            {props.card.isOpen && props.card.value}
        </button>
    )
}
export default Square;