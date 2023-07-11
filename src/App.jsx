import CardAdicionar from "./components/CardAdicionar";
import "./App.css";
import "Bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
    const [tarefas, setTarefas] = useState({});
    return (
        <>
            <h1>To Do List</h1>
            <CardAdicionar
                adicionarTarefa={() => {
                    console.log(tarefas);
                }}
            />
        </>
    );
}

export default App;
