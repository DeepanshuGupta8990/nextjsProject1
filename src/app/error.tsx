'use client'

import { Button } from "react-bootstrap"

interface ErrorPageProp {
  error:Error,
  reset:()=>void
}

export default  function Error({error,reset}:ErrorPageProp) {
  return (
    // <div style={{display:"flex",justifyContent:"center",alignItems:'center',width:"100vw",height:"100vh",flexDirection:"column"}}>
      <div>
      <h1>Error😅</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
