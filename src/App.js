import React from 'react'
import eventsApi from './lib/api/api.js'

function App() {
  React.useEffect(() => {
    eventsApi.get().then(res=>{
      console.log(res.data)
    })
  })

  return <h1>Hello World</h1>
}

export default App
