import React from 'react';

const ContainerInput = ({search})=>{
    return (
        <div className="input-group input-group-lg mb-3" style={{width:"40%"}}>
            <input 
                className="form-control input-keyword" 
                placeholder="Cari Digimon" 
                type="search" 
                onChange={search}
            />
        </div>
    );
}

export default ContainerInput;