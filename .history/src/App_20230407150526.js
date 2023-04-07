import './App.css';
import Main from './js/main';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, increase, addTodo } from "./redux/index";
import TodoList from "./components/Todolist";
import React, { useState } from "react";


function App() {
  const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;


