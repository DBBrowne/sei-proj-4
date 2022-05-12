import React from 'react'
import Home from './components/Home.js'

// @ts-ignore
Promise._forEach = async function (arr, fn) {
  await arr.reduce(async function (promise, el, i) {
    await promise
    await fn(el, i, arr)
  }, Promise.resolve())
}



function App() {

  return (
    <Home />
  )
}

export default App
