import React, { useReducer } from 'react';
import ToDoApp from './Components/ToDoApp';
import { ToDoContext } from './Context/toDoContext';
import { reducer } from './Store/reducer';
import { ToDoState } from './Store/state';

const App = () => {
  const [toDoState, dispatch] = useReducer(reducer, ToDoState)

  return (
    <ToDoContext.Provider value={{ toDoState, dispatch }}>
      <ToDoApp />
    </ToDoContext.Provider>
  )
}

export default App;
