import { useSelector } from 'react-redux'
import './StartMessage.css'

export const StartMessage = ({setShowMessage, setRandomNo}) => {
  
  const playerData = useSelector(state => state.playerData)
  
  
  const generateRandomNo = () => {
    const randomNo = Math.floor(Math.random()*(playerData.pDifficulty || 10))
    console.log(randomNo);
    setRandomNo(randomNo)
    console.log("hello");
    setShowMessage(false)
  }

  return (
    <div className='start-message-modal'>
        <div className="container-start">
                <p className="message">Start Game ?</p>
                <div className="start-btns">
                        <button className="start" onClick={ generateRandomNo }>Yeh Sure</button>
                        <button className="cancel" onClick={() => {setShowMessage(false)}}>No! I am Looser</button>
                </div>
        </div>
    </div>
  )
}
