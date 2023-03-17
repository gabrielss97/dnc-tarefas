// App.js
import { useState } from "react";
import logoDnc from "./assets/dnc-logo.jpg";
import "./app.scss";
import Column from "./components/Column";

function App() {
  const [columns, setColumns] = useState([
    { id: 1, title: "Planejamento" },
    { id: 2, title: "A fazer" },
    { id: 3, title: "Fazendo" },
    { id: 4, title: "Feito" },
  ]);

  return (
    <section>
      <header>
        <img src={logoDnc} alt="dnc-logo" />
        <h1>Lista de Tarefas</h1>
      </header>
      <main>
        {columns.map((column) => (
          <Column title={column.title} key={column.id} />
        ))}
      </main>
    </section>
  );
}

export default App;
