import React from 'react';
import logo from './logo.svg';
import './App.css';


function Container(props :any){
    return (<div className="Contain">
        <div className="left">
          <i className={props.icon}></i>
        </div>
        <div className="right">
            <div>{props.number}</div>
            <div>{props.des}</div>
        </div>
    </div>)
}

export default Container;
