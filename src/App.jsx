import { useEffect, useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Controles from './components/Controles';
import {names} from './elements/Names'

function App() {

  const [str, setStr]=useState('Welcome!');
  const [soundEnabled, setSoundEnabled]=useState(true);
  const [volume, setVolume] = useState(1);

  useEffect(()=>{
    const handleKewDown = (event)=>{
      const letter =event.key.toUpperCase();
      const buttonId = Object.keys(names).find( id=> names[id].letter===letter );
      if(buttonId){
        const buttonElement = document.getElementById(buttonId);
        buttonElement.click();
      }
    };
    document.addEventListener('keydown', handleKewDown);
    return ()=>{
      document.removeEventListener('keydown', handleKewDown);
    };
  }, [])

  const handleLetterClick = (displayId) => setStr(displayId)
  const handleCheckboxChange = ()=> setSoundEnabled(!soundEnabled)
  const onChangeVolume = (e) => {setVolume(parseFloat(e.target.value))
    setStr(`Volume: ${parseInt(e.target.value*100)}`)
  }
  return (
    <div className="App">
      <main className='inner-container' id='drum-machine'>
        <section className='pad-bank'>
          {Object.keys(names).map((key)=>(
            <Boton volume={volume} soundEnabled={soundEnabled} key={key} id={key} onLetterClick={handleLetterClick}/>
          ))}
        </section>
        <Controles soundEnabled={soundEnabled} handleCheckboxChange={handleCheckboxChange} str={str} volume={volume} onChangeVolume={onChangeVolume}/>
      </main>
    </div>
  )
}

export default App
