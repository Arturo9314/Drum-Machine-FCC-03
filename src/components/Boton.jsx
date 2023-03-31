import React, { useRef, useState } from "react";
import { names } from "../elements/Names";

const Boton = ({id,onLetterClick, soundEnabled, volume})=>{
    const [isPressed, setIsPressed] = useState(false);
    const {letter, audioSrc} = names[id]
    const audioRef = useRef(null);

    const handleClick = ()=>{
        if(soundEnabled){
            audioRef.current.currentTime = 0;
            audioRef.current.volume = volume;
            audioRef.current.play();
            // const audio = new Audio(audioSrc);
            // audio.volume = volume;
            // audio.play();
            onLetterClick(id)
        }
        setIsPressed(true);
        setTimeout(() => {
            setIsPressed(false)
        }, 200);

    }
    
    return(
        <button onClick={handleClick} className={`drum-pad ${isPressed? "pressed": ""}`} id={id}>
            <audio src={audioSrc} className="clip" id={letter} ref={audioRef}></audio>
            {letter}
        </button>
    );
}

export default Boton;