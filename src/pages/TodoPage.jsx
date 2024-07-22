import { useState, useEffect } from 'react';
import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { getTodos, createTodo } from '../api/todos';


const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (value) => setInputValue(value);
  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return
    };
    try{
      const data = await createTodo({
      "title": inputValue,
      "isDone": false,
      })

      setTodos((prevtodos) => {
        return [
          ...prevtodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false
        }];
      });

      setInputValue('');
    } catch(error) {
      console.error(error);
    }
  }
  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return;
    }

    try{
      const data = await createTodo({
      "title": inputValue,
      "isDone": false,
      })

      setTodos((prevtodos) => {
        return [
          ...prevtodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false,
          }];
      });

      setInputValue('');
    } catch(error) {
      console.error(error);
    }
  }

  const handleToggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }
        return todo;
      });
    });
  }
  
  const handleChangeMode = ({id, isEdit}) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, isEdit
          };
        }
        return {...todo, isEdit: false};
      });
    });
  }

  const handleSave = ({id, title}) => {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false,
          };
        }
        return todo;
      });
    });
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

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
        onDelete={handleDelete}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default TodoPage;
