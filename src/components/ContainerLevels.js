import React from 'react';

const ContainerLevels = ({pick})=>{
    return (
        <div>
           <select className="form-control level-pick container-level none" onChange={pick}>
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