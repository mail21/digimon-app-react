import React from 'react';

const ContainerLevels = ({pick})=>{
    return (
        <div style={{width:"45%"}} className="ml-3">
           <select className="form-control" onChange={pick} >
             <option>All</option>
             <option>In Training</option>
             <option>Fresh</option>
             <option>Rookie</option>
             <option>Champion</option>
             <option>Ultimate</option>
             <option>Mega</option>
             <option>Armor</option>
           </select>
        </div>
    );
}

export default ContainerLevels;