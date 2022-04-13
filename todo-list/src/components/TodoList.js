import React,{useState} from 'react'

const TodoList = ({todos, setTodos}) => {
  const[styleState,setStyleName] = useState([])
  

  const handleDelete = ({id}) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const handleCompleted = ({id}) => {
    var flag = 0
    for( var i=0; i<styleState.length; i++){
      if(id === styleState[i]){
        flag = 1;
        break;
      }
    }
    if(flag === 0){
      setStyleName([...styleState, id])
    }
    console.log(styleState);
  }
  
  return (
    <div>
      {todos.map((todo,i) => (
        <li className='todo-list' key={todo.id}>
              <input
              type={'text'}
              value={todo.title}
              className={styleState === todo.id?'list Nothing': 'list doSomething'}
              onChange={(e) => e.preventDefault()}
              />
              <div className='butt'>
                <button className='delete' onClick={()=> handleDelete(todo)}>||</button>
                <button className='complete' onClick={()=> handleCompleted(todo)}>/\</button>
                
              </div>
          </li>
      ))}
    </div>
  )
}

export default TodoList
