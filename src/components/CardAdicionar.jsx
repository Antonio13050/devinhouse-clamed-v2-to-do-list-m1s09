import React, { useState } from "react";

const CardAdicionar = ({ adicionarTarefa }) => {
    const [texto, setTexto] = useState("");

    const handleAdicionar = () => {
        adicionarTarefa(texto);
    };

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
            <button onClick={handleAdicionar}>Add</button>
        </>
    );
};

export default CardAdicionar;
