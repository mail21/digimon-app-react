import React from 'react';
import './App.css';


function Card(props){
    return(
        <div className="card digi-card">
            <img src={props.img} width="150" height="150" className="card-img-top" alt="No Image"/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.level}</p>
            </div>
        </div>
    );
}

export default Card;