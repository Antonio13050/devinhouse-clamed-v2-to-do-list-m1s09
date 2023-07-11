import React, { useState } from "react";

const CardAdicionar = (props) => {
    const [texto, setTexto] = useState("");

    return (
        <>
            <input
                placeholder="adicionar tarefa"
                type="text"
                value={texto}
                onChange={(e) => {
                    setTexto(e.target.value);
                }}
            />
            <button onClick={props.adicionarTarefa}>Add</button>
        </>
    );
};

export default CardAdicionar;
