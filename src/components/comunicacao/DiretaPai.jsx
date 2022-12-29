import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome="Nicolas" numero={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Matheus" numero={17} nerd={false}></DiretaFilho>
        </div>
    )
}