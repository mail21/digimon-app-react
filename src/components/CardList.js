import React from 'react';
import Card from './Card';
import './App.css';

const CardList = (props) => {   
    return (
        <div className="row mt-5 ml-2 mb-3 digi-item">
            { props.digimon.map((el,i) => {
                return <Card key={i} name={el.name} img={el.img} level={el.level}/>
            })}
        </div>
    );
}

export default CardList;