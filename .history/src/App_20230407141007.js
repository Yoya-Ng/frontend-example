import './App.css';
import Main from './js/main';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, increase, addTodo } from "./redux/index";
import TodoList from "./components/Todolist";
import React, { useState } from "react";

function App() {
  var users = require('./routes/users');
  // DataBase 
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "adminroot",
    database: "test"
  });

  con.connect(function (err) {
    if (err) {
      console.log('connecting error');
      return;
    }
    console.log('connecting success');
  });

  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
