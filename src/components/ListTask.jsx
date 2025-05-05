import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basculerEtatTache, supprimerTache, modifierTache } from "../redux/tasksSlice";
import Task from "./Task";

const ListTask = () => {
  // Récupération des tâches et du filtre depuis Redux
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  // Filtrage des tâches en fonction du filtre sélectionné
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isDone;
    if (filter === "pending") return !task.isDone;
    return true; // Par défaut, afficher toutes les tâches
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>Aucune tâche à afficher.</p>
      ) : (
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={() => dispatch(basculerEtatTache(task.id))}
            onDelete={() => dispatch(supprimerTache(task.id))}
            onEdit={(description) => dispatch(modifierTache({ id: task.id, description }))}
          />
        ))
      )}
    </div>
  );
};

export default ListTask;
