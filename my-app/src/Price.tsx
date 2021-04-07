import React from 'react';
import './Price.css';


function Price(props :any){
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
          <h5 className="text-center"><i className={props.icon}></i></h5>
            <h6 className="card-price text-center">{props.title}</h6>
            <h6 className="card-price text-center">{props.money}</h6>
            <h5 className="card-title text-muted text-uppercase text-center">Including all taxes</h5>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className={props.check1}></i></span>{props.content}</li>
              <li><span className="fa-li"><i className={props.check2}></i></span>Tea & Coffee Breaks</li>
              <li><span className="fa-li"><i className={props.check3}></i></span>Wifi Available</li>
              <li><span className="fa-li"><i className={props.check4}></i></span>Exclusive Seatings</li>
            </ul>
            <h5 className="text-center"><a href="#" className="btn btn-block btn-primary text-uppercase" ><span className="fa fa-ticket" aria-hidden="true"></span> Buy Now </a></h5>
          </div>
        </div>
      </div>
    )
}

export default Price;
