import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)

  const sumTodos = todos.length

  const handleChange = (value)=>{
    setInputValue(value)
  }

  const handleAddTodo = () => {
    //如果沒輸入值，不做任何事
    if (inputValue.length === 0) {
      return
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false
        }
      ]
    })
    //新增todo後，清空input
    setInputValue('')
  }

  const handleKeyDown = () => {
    if (inputValue.length === 0) {
      return
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false
        }
      ]
    })
    //新增todo後，清空input
    setInputValue('')
  }

  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id){
          return {
            ...todo,
            isDone: !todo.isDone
          }        
        }
        //一樣的話，不動作
        return todo
      })
    })
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, isEdit
          }
        }

        return { ...todo, isEdit: false }
      })
    })
  }

  const handleSave = ({ id, title }) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false
          }
        }
        return todo;
      })
    })
  }
  return (
    <div>
      TodoPage
      <Header />
      <TodoInput 
        inputValue={inputValue} 
        onChange={handleChange} 
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection 
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDeleteTodo}
      />
      <Footer 
        sumTodos={sumTodos}
      />
    </div>
  );
};

export default TodoPage;
