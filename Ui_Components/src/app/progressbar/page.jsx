import ProgressBar from '@/components/progress/progressBar'
import React from 'react'

const page = () => {
  return (
      <div style={{fontFamily:"sans-serif"}}>
        <h1 style={{textAlign:"center",margin:"20px"}}>Progress Bar</h1>
        <ProgressBar progress={30} />
      </div>
  )
}

export default page