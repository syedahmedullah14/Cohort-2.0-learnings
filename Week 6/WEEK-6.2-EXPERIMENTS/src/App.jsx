import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  // const [todos, setTodos] = useState([])
  // useEffect(()=>{
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then(function(res){
  //     setTodos(res.data.todos);
  //   })
  // }, [])
  const [selectedId, setSelectedId] = useState(1)
  return (
    <>
    <button onClick={function(){
      setSelectedId(1)
    }}>1</button>

    <button onClick={function(){
        setSelectedId(2)
      }
    }>2</button>

    <button onClick={function(){
        setSelectedId(3)
      }
    }>3
    </button>

    <button onClick={function(){
        setSelectedId(4)
      }
    }>4</button>

    <Todo id={selectedId} />
      {/* {todos.map(todo => <Todo title={todo.title} description={todo.description} />)} */}
    </>
  )
  }

  

  function Todo({id}){
    const [todo, setTodos] = useState({})
    useEffect(()=>{
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function(res){
        setTodos(res.data.todo);
      })
    }, [id])

    return <>
    <p>{id}</p>
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
    </>
  
}

export default App
