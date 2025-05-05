import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterTache } from "../redux/tasksSlice";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim() === "") return alert("Veuillez entrer une tâche !");
    const nouvelleTache = {
      id: Date.now(),
      description,
      isDone: false,
    };
    dispatch(ajouterTache(nouvelleTache));
    setDescription("");
  };

  return (
    <div className="add-task">
      <input
        className="add-task__input"
        type="text"
        placeholder="Ajouter une tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button 
        className="add-task__button"
        onClick={handleAdd}
      >
        Ajouter
      </button>
    </div>
  );
};

export default AddTask;