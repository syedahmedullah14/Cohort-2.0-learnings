import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import axios from 'axios'

//custom hook
function useTodos(){
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    axios.get('https://sum-server.100xdevs.com/todos')
    .then(res => {
      setTodos(res.data.todos)
    })
  }, [])
  
  return todos;
}

function App() {

  const todos = useTodos();
  // const [todos, setTodos] = useState([]);

  // useEffect(()=>{
  //   axios.get('https://sum-server.100xdevs.com/todos')
  //   .then(res => {
  //     setTodos(res.data.todos)
  //   })
  // }, [])
  return <>
  {todos.map(todo => <Track todo={todo} / >)}
  </>
}

function Track({todo}){
return <div>
  {todo.title}
  <br />
  {todo.description}
</div>
}
  // useEffect(()=>{
  //   setInterval(()=> {
  //     setRender(r => !r)
  //   }, 2000)
  // }, [])
  // return (
  //   <>
  //    { render ? <MyComponent /> : <div></div> }

  //   </>
  // )
// }

// function MyComponent(){
//   const [count, setCount] = useState(0)
//   const increment = () =>{
//     setCount(count + 1 );
//   }
//   return (
//     <div>
//       <p>{count}</p>
    
//     <button onClick={increment}>Increment Count</button>
//     </div>
//   )
// }

// class MyComponent extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {count: 0}
//   }
//   incrementCount = () =>{
//     this.setState({count: this.state.count + 1});
//   }

//   render (){
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment Count</button>
//       </div>
//     )
//   }
// }

function MyComponent(){
  useEffect(() => {
    console.error("component mounted")
    return () => {
      console.log("component unmounted")
    }
  }, [])
  return <div>
    from inside component
  </div>
}

export default App
