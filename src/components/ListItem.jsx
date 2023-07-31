import React from "react";
import { useState } from "react";
import "../App.css";

const ListItem = ({ texto, finalizado, encerrarTarefa, id }) => {
    const [finalizada, setFinalizada] = useState(finalizado);
    return (
        <div className="item">
            <input
                type="checkbox"
                checked={finalizada}
                onChange={() => setFinalizada(!finalizada)}
            />
            <span
                style={{ textDecoration: finalizada ? "line-through" : "none" }}
            >
                {texto}
            </span>
            <button onClick={() => setFinalizada(!finalizada)}>
                Finalizar
            </button>
            <button onClick={() => encerrarTarefa(id)}>Encerrar</button>
        </div>
    );
};
export default ListItem;
