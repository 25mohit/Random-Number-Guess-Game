import { useSelector } from 'react-redux'
import './StartMessage.css'
import {SorryCompo} from '../sorryCompo/SorryCompo'
import { useState } from 'react'
import start from '../../assests/sounds/start.wav'
import cancel from '../../assests/sounds/cancel.wav'
import background from '../../assests/sounds/gamesound.mp3'

export const StartMessage = ({setShowMessage, setRandomNo}) => {

  const playerData = useSelector(state => state.playerData)
  const startS = new Audio(start)
  const cancelS = new Audio(cancel)
  const bgMusic = new Audio(background)

  const generateRandomNo = () => {
    const randomNo = Math.floor(Math.random()*(playerData.pDifficulty || 10)+1)
    console.log(randomNo);
    setRandomNo(randomNo)
    console.log("hello");
    setShowMessage(false)
    startS.play()
    bgMusic.play()
  }
  const cancelGame = () => {
    cancelS.play()
    setShowMessage(false)
  }
  return (
    <div className='start-message-modal'>
        <div className="container-start">
                <p className="message">Start Game ?</p>
                <div className="start-btns">
                        <button className="start" onClick={ generateRandomNo }>Yeh Sure</button>
                        <button className="cancel" onClick={ cancelGame }>No! I am Looser</button>
                </div>
        </div>
    </div>
  )
}
