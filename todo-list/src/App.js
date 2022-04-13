import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className='main'>
        <div className='title'>
          <Header />
        </div>
        <div className='input-area'>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          />
        </div>
        <div className='task-list'>
          <TodoList
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
