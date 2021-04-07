import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Price.css';
import './item.css';
import Container from './Container';
import Price from './Price'
import { data1, data2 } from './FakeData/Data';

  

function App() {
  let contents = data1;
  let contents2 = data2;
  return (
  <div id="dsad">
    <div id="contain">
      {contents.map((item)=><Container icon = {item.icon} number = {item.number} des = {item.description} />)}
    </div>
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {contents2.map((item,i)=><Price icon = {item.icon} 
              title = {item.title} 
              money = {item.money} 
              check1 = {item.check1} 
              check2 = {item.check2} 
              check3 = {item.check3} 
              check4 = {item.check4} 
              content = {item.content}
              />)}
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default App;
