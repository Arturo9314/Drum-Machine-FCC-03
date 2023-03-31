import React from "react";

const Controles = ({soundEnabled, handleCheckboxChange, str, volume, onChangeVolume})=>{
    return(
        <section className='controls-container'>
            <h2>Power</h2>
            <span className="switch square">
                <input id="switch-square" className="control" type="checkbox" checked={soundEnabled} onChange={handleCheckboxChange} />
                <label htmlFor="switch-square"></label>
            </span>
            {str&&<p id="display">{str}</p>}
            <input className="volume-slider" type="range" min="0" max="1" step="0.01" value={volume} onChange={onChangeVolume} />
        </section>
    )
}

export default Controles;