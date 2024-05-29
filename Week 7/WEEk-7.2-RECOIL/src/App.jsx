import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationSelector, notificationsAtom } from './atoms'

function App() {
  return  <RecoilRoot>
   
          <MainApp />
        </RecoilRoot>
  
  
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const [messagingCount, setMessagingCount]= useRecoilState(messagingAtom);

  const finalValue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

  const totalNotificationCount = useRecoilValue(notificationSelector);

  return (
    <>
      
      <button>Home</button>
      <button>My Network ({finalValue})</button>
      <button>Jobs ({jobsCount})</button>
      <button onClick={()=>{
        setMessagingCount(count => count + 1)
      }}>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button> Me</button>
      
    </>
  )
}

export default App
