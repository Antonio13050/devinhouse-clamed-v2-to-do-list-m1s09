import CardAdicionar from "./components/CardAdicionar";
import "./App.css";
import "Bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <h1>To Do List</h1>
            <CardAdicionar
                adicionarTarefa={() => {
                    console.log("foi");
                }}
            />
        </>
    );
}

export default App;
