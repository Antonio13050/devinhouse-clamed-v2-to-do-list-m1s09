import CardAdicionar from "./components/CardAdicionar";
import "./App.css";
import "Bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import List from "./components/ListItem";

function App() {
    const [listaTarefas, setListaTarefas] = useState([]);
    function adicionarTarefa(texto) {
        if (!texto) {
            return;
        }

        const tarefa = {
            id: listaTarefas.length + 1,
            texto,
            finalizado: false,
        };
        setListaTarefas([...listaTarefas, tarefa]);
    }
    return (
        <>
            <h1>To Do List</h1>
            <CardAdicionar adicionarTarefa={adicionarTarefa} />
            {listaTarefas.map((tarefa) => (
                <List
                    key={tarefa.id}
                    texto={tarefa.texto}
                    finalizado={tarefa.finalizado}
                />
            ))}
        </>
    );
}

export default App;
