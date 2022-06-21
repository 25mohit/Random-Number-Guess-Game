import { useSelector } from 'react-redux'
import './StartMessage.css'
import start from '../../assests/sounds/start.wav'
import cancel from '../../assests/sounds/cancel.wav'
import background from '../../assests/sounds/gamesound.mp3'

export const StartMessage = ({setShowMessage, setRandomNo, setShowSorry}) => {

  const playerData = useSelector(state => state.playerData)
  const startS = new Audio(start)
  const cancelS = new Audio(cancel)
  const bgMusic = new Audio(background)

  const generateRandomNo = (e) => {
    e.preventDefault()
    const randomNo = Math.floor(Math.random()*(playerData.pDifficulty || 10)+1)
    setRandomNo(randomNo)
    setShowMessage(false)
    startS.play()
    bgMusic.play()
  }
  const cancelGame = (e) => {
    e.preventDefault()
    cancelS.play()
    setShowMessage(false)
    setShowSorry(true)
  }
  return (
    <div className='start-message-modal'>
        <div  className="container-start">
                <p className="message">Start Game ?</p>
                <form className="start-btns">
                        <button className="start" onClick={ generateRandomNo }>Yeh Sure</button>
                        <button className="cancel" onClick={ cancelGame }>No! I am Looser</button>
                </form>
        </div>      
    </div>
  )
}
