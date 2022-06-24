import { useState } from 'react';
import './App.css';
import { Center } from './components/center/Center';
import { Left } from './components/left/Left';
import { Modal } from './components/modal/Modal';
import { Right } from './components/right/Right';
import { FcSettings } from 'react-icons/fc';
import { SorryCompo } from './components/sorryCompo/SorryCompo';

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showM, setShowM] = useState(false)
  const [remeaningChance, setRemeaningChance] = useState(15)
  const [usedChance, setUsedChance] = useState(0)
  const [showRIght, setShowRIght] = useState(true)
  const [shoeCent, setShoeCent] = useState(true)
  const [showSorry, setShowSorry] = useState(false)
  
  const [winBg, setWinBg] = useState(false)

  return (
    <div className="App">
        <div className='left-div'><Left/></div>
        {shoeCent&&
        <div className='center-div'><Center 
        setWinBg={ setWinBg }
        winBg={ winBg }
        showM={ showM } 
        usedChance={usedChance}
        setUsedChance={setUsedChance}
        setRemeaningChance={setRemeaningChance} 
        remeaningChance={ remeaningChance }
        /></div>}
        {showRIght &&<>
        <div className='right-div'> <Right usedChance={usedChance} remeaningChance={remeaningChance}/></div> 
            {showModal && <Modal 
            setWinBg = { setWinBg }
            setShowSorry = { setShowSorry }
            setShowRIght={setShowRIght} 
            setShowM={ setShowM } 
            showModal={ showModal } 
            setShowModal={ setShowModal }
            setShoeCent={ setShoeCent }
            />}      
            <div className='setting-icon'><FcSettings id="set-icon" onClick={() => setShowModal(true)}/></div></> }
            {showSorry && <SorryCompo />}
    </div>
  );
}

export default App;
