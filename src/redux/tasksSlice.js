import { createSlice } from "@reduxjs/toolkit";

// État initial
const initialState = {
  tasks: [
    { id: 1, description: "Apprendre Redux", isDone: false },
    { id: 2, description: "Faire les devoirs", isDone: true },
  ],
  filter: "all", // "all", "completed", "pending"
};

// Création du slice
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    ajouterTache: (state, action) => {
      state.tasks.push(action.payload);
    },
    supprimerTache: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    basculerEtatTache: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    modifierTache: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.description = action.payload.description;
      }
    },
    filtrerTaches: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export des actions
export const { ajouterTache, supprimerTache, basculerEtatTache, modifierTache, filtrerTaches } = tasksSlice.actions;

// Export du reducer
export default tasksSlice.reducer;
