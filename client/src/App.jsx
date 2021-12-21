import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [states, setState] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8005/todos')
      .then(({ data }) => setTodos(data))
    axios.get('http://localhost:8005/todos/states')
      .then(({ data }) => setState(data))
  }, []);

  const changeState = (idTodo, idState) => {
    console.log(idState)
    axios.put('http://localhost:8005/todos/change-state', { idTodo : idTodo, idState : idState })
    .then(({ data }) => console.log(data))
  }

  return (
    <div className="App">
      <ul>
        {
          todos && todos.map(todo =>
            <li key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.priority_value}</p>
              <select name="state" onChange={(e) => changeState(todo.id, e.target.value)}>
                <option value={todo.state_id}>{todo.state_value}</option>
                {
                  states && states.filter(state => state.id !== todo.state_id).map(state =>
                    <option key={state.id} value={state.id}>{state.value}</option>
                  )
                }
              </select>
              {todo.state_value}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
