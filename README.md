# ToDo App avec Redux

Cette application permet de gérer une liste de tâches en utilisant **Redux** pour la gestion de l'état global. Elle permet d'ajouter, de supprimer, de modifier et de filtrer les tâches.

## Fonctionnalités

* Ajouter une nouvelle tâche.
* Marquer une tâche comme terminée ou non terminée.
* Modifier une tâche existante.
* Supprimer une tâche.
* Filtrer les tâches par statut (terminées, non terminées, ou toutes).

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

* **Node.js** : [Télécharger Node.js](https://nodejs.org/)
* **npm** : Gestionnaire de paquets inclus avec Node.js

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/RadjiMohamedSalim013/redux-todo-app.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd todo-redux-app
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

## Démarrer l'application

Une fois les dépendances installées, vous pouvez démarrer l'application avec la commande suivante :

```bash
npm start
```

Cela lancera l'application sur `http://localhost:3000`.

## Structure du projet

Voici une vue d'ensemble de la structure des fichiers de l'application :

```
todo-redux-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── FilterTasks.jsx
│   │   ├── ListTask.jsx
│   │   ├── Task.jsx
│   ├── redux/
│   │   ├── tasksSlice.js
│   ├── App.jsx
│   ├── index.js
├── package.json
└── README.md
```

## Explication du code

### `src/components/AddTask.jsx`

Ce composant permet à l'utilisateur d'ajouter une nouvelle tâche à la liste. Il contient un champ de texte pour la description et un bouton pour ajouter la tâche.

### `src/components/ListTask.jsx`

Ce composant affiche la liste des tâches. Il utilise Redux pour récupérer les tâches et appliquer le filtre sélectionné (par statut). Chaque tâche est rendue via le composant `Task`.

### `src/components/Task.jsx`

Ce composant affiche une tâche individuelle avec ses options pour la marquer comme terminée, la supprimer ou la modifier.

### `src/components/FilterTasks.jsx`

Ce composant permet de filtrer les tâches par statut. L'utilisateur peut choisir de voir toutes les tâches, uniquement les terminées ou les non terminées.

### `src/redux/tasksSlice.js`

Le slice Redux gère l'état des tâches et le filtre. Il inclut des actions pour ajouter, supprimer, modifier, basculer l'état d'une tâche et filtrer les tâches.

### `src/App.jsx`

Le composant principal qui intègre tous les autres composants. Il affiche l'interface utilisateur avec les options d'ajout, de filtrage et de visualisation des tâches.

## Utilisation

1. **Ajouter une tâche** : Entrez la description de la tâche dans le champ prévu à cet effet et cliquez sur "Ajouter".
2. **Marquer une tâche comme terminée** : Cliquez sur l'icône de la coche à côté de la tâche.
3. **Modifier une tâche** : Cliquez sur l'icône de modification à côté de la tâche pour éditer sa description.
4. **Supprimer une tâche** : Cliquez sur l'icône de la corbeille à côté de la tâche pour la supprimer.
5. **Filtrer les tâches** : Utilisez les boutons de filtrage pour afficher les tâches terminées, non terminées ou toutes les tâches.

## Redux

L'état des tâches et du filtre est géré par **Redux**. Voici un aperçu de la gestion de l'état dans le store :

* **`tasks`** : Un tableau qui contient toutes les tâches.
* **`filter`** : Le filtre actif, qui peut être `all`, `completed`, ou `pending`.

