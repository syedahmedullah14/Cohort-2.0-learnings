import React, { Suspense, lazy, useCallback, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Dashboard = lazy(()=>import ('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { CountContext } from './components/Context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return <div>
    <RecoilRoot >
      <Count />
    </RecoilRoot>
   </div>

    }


  function Count({count}){
    console.log("re-render")
    return <> 
    <CountRender />
    <Button />
    </>
  }

  function CountRender(){
    const count = useRecoilValue(countAtom);
    return <b>
      {count}
      <EvenRenderer />
    </b>
  }

  function EvenRenderer(){
    const isEven = useRecoilValue(evenSelector)
    return <div>
      {isEven ? "It is even" : null}
    </div>
  }


  function Button(){
    console.log("button-rerendered")
    // const [count, setCount] = useRecoilState(countAtom)
    const setCount = useSetRecoilState(countAtom)
    return <>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count - 1)
    }}>Decrease</button>
    </>

  }









//   return (
//     <div>

//     <BrowserRouter>
//     <AppBar />
//       <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//         <Route path='/' element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// function AppBar(){
//   const navigate = useNavigate();

//   return <div> 
//   <div style={{background: "black", color: "white"}}>
//   This is a topbar
//     </div>

//       <button onClick={()=>{
//         navigate('/');
//       }}>Landing Page</button>

//       <button onClick={()=>{
//         navigate('/dashboard')
//       }}>Dashboard</button>
// </div>
// 


export default App
