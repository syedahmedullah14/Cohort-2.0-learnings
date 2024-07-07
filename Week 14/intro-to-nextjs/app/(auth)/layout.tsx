import React from 'react'

const layout = ({ children }: {
    children: React.ReactNode
}) => {
  return <div className='border-b text-center'>20% off for the next 7 days
   <div>
        {children}
  </div>
  </div>
 

  
}

export default layout 