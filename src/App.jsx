import React from "react";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import FilterTasks from "./components/FilterTasks";
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">📝 Liste de Tâches</h1>
      </header>
      
      <main className="app__main">
        <section className="app__section app__section--add-task">
          <AddTask />
        </section>
        
        <section className="app__section app__section--filters">
          <FilterTasks />
        </section>
        
        <section className="app__section app__section--task-list">
          <ListTask />
        </section>
      </main>
    </div>
  );
};

export default App;