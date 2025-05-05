import React from "react";
import { useDispatch } from "react-redux";
import { filtrerTaches } from "../redux/tasksSlice";

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(filtrerTaches(status));
  };

  return (
    <div className="filter-tasks">
      <button 
        className="filter-tasks__button filter-tasks__button--all"
        onClick={() => handleFilter("all")}
      >
        Toutes les tâches
      </button>
      <button 
        className="filter-tasks__button filter-tasks__button--completed"
        onClick={() => handleFilter("completed")}
      >
        Tâches terminées
      </button>
      <button 
        className="filter-tasks__button filter-tasks__button--pending" 
        onClick={() => handleFilter("pending")}
      >
        Tâches à faire
      </button>
    </div>
  );
};

export default FilterTasks;