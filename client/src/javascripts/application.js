import React, { Component } from 'react'
import { render } from 'react-dom'

console.log('hello world')

const App = () => <h1>Hello World</h1>
const target = document.getElementById('app')

render(<App />, target)
