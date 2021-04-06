import React from 'react';
import logo from './logo.svg';
import './App.css';
import './item.css';
import Container from './Container';

interface Content
  {
    icon : string,
    number: string,
    description: string,
  }

function App() {
  let contents : Content[];
  contents = [{
    icon: "fa fa-microphone",
    number: "36+",
    description: "Unique Session"
  },
  {
    icon: "fa fa-user",
    number: "12",
    description: "Amazing Speaker"
  },
  {
    icon: "fa fa-coffee",
    number: "45",
    description: "Food Stalls"
  },
  {
    icon: "fa fa-book",
    number: "2350+",
    description: "Books Available"
  }
  ]
  return (
    <div id="contain">
      {contents.map((item)=><Container icon = {item.icon} number = {item.number} des = {item.description} />)}
    </div>
  )
}

export default App;
