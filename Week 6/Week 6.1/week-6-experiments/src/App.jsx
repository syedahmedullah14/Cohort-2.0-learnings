import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
  return <div>
    <CardWrapper innerComponent = {<TextComponent/>} />
    <CardWrapper innerComponent = {<TextComponent/>} />
  </div>
}

function TextComponent(){
  return <div>
    hi there
  </div>
}

function CardWrapper({innerComponent}){
    return <div style={{border: "2px solid black"}}>
      {innerComponent}
    </div>

}













// let counter = 4;
// function App(){

//   const [todos, setTodos] = useState([
    
//   {
//     id: 1,
//     title: "Go to gym",
//     description: "Gyming from 9-10pm"

//   },
//   {
//     id: 1,
//     title: "Go to class",
//     description: "Gyming from 9-10pm"

//   },
//   {
//     id: 1,
//     title: "Go to swimming",
//     description: "Gyming from 9-10pm"

//   },]
//   ) 

//   function addTodo(){
//     setTodos([...todos, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random(),
//     }])
//   }

//   return (
//     <>
//     <button onClick={addTodo}>Add todo</button>
//     {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description} />)}
//   </>
// )
// }


// function Todos({title, description}){
//   return <div>
//     <h3>{title}</h3>
//     <h5>{description}</h5>
//   </div>
// }

// function App() {

//   return (
//     <div>
//       <HeaderWithButton/>
//       <Header title="My name is jaser"></Header>
//     </div>    
//   ) 
// }

// function HeaderWithButton(){
//   const [firstTitle, setFirstTitle] = useState("jaser");


//   function updateTitle(){
//     setFirstTitle(" Hi there I'm Jaser " + Math.random());
//   }

//   return<>
  
//   <button onClick={updateTitle}>Update the title</button>
//   <Header title={firstTitle}></Header>
  
//   </>


// }

// function Header({title}){  
//   return <div>
//     {title}
//   </div>
// }

export default App
