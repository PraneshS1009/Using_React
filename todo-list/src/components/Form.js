import React from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({ input, setInput, todos, setTodos }) => {
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
          <input type={'text'} 
          placeholder={'Enter the task.......'} 
          className={'input'} 
          value={input} 
          required 
          onChange={handleInput}   />
          <button type={"submit"} className={'add-button'}>Add </button>
      </form>
    </div>
  )
}

export default Form
