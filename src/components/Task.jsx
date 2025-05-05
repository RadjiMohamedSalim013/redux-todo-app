import React, { useState } from "react";

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditSave = () => {
    onEdit(newDescription);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? "task--done" : ""} ${isEditing ? "task--editing" : ""}`}>
      {isEditing ? (
        <div className="task__edit-mode">
          <input
            className="task__edit-input"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button 
            className="task__button task__button--save"
            onClick={handleEditSave}
          >
            Enregistrer
          </button>
        </div>
      ) : (
        <div className="task__view-mode">
          <span className={`task__description ${task.isDone ? "task__description--completed" : ""}`}>
            {task.description}
          </span>
          <div className="task__actions">
            <button 
              className="task__button task__button--toggle"
              onClick={onToggle}
            >
              {task.isDone ? "Marquer comme non terminé" : "Marquer comme terminé"}
            </button>
            <button 
              className="task__button task__button--edit"
              onClick={() => setIsEditing(true)}
            >
              Modifier
            </button>
            <button 
              className="task__button task__button--delete"
              onClick={onDelete}
            >
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;