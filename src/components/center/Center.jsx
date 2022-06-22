import './Center.css'
import { useSelector } from 'react-redux'
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { StartMessage } from '../startMessage/StartMessage';
import { useEffect, useRef, useState } from 'react';
import { GuessedNo } from '../guessedNo/GuessedNo';
import { ErrorWindow } from '../errorWindow/ErrorWindow';
import Confetti from 'react-confetti'
import wrong from '../../assests/sounds/wrong.wav'
import win from '../../assests/sounds/win.wav'
import start from '../../assests/sounds/start.wav'
import gameover from '../../assests/sounds/gmaeover.wav'
import { SorryCompo } from '../sorryCompo/SorryCompo';

export const Center = ({ showM,remeaningChance, setRemeaningChance, setUsedChance, usedChance }) => {

    const [showMessage, setShowMessage] = useState(false)
    const [guessingNo, setGuessingNo] = useState(0)
    const [randomNo, setRandomNo] = useState('')
    const [guessedNo, setGuessedNo] = useState([])
    const [showSuc, setShowSuc] = useState(false)
    const [showErr2, setShowErr2] = useState(false)
    const [lower, setLower] = useState(false)
    const [higher, setHigher] = useState(false)
    const [onlyNo, setOnlyNo] = useState(false)
    const [showSorry, setShowSorry] = useState(false)

    const playerData = useSelector(state => state.playerData)
    const wrongS = new Audio(wrong)
    const winS = new Audio(win)
    const startS = new Audio(start)
    const gameO = new Audio(gameover)

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            showM && setShowMessage(true)
            clearInterval(interval)
            },100)
        },[showM])

        useEffect(() => {
            const interval = setInterval(() => {
                showM && setShowSuc(true)
                clearInterval(interval)
            },1)
        },[showM])

        if(remeaningChance <1){
            let danger = document.getElementById("guess-bt")
            let wraper = document.getElementById("wraper")
            document.getElementById("guess-number").disabled= true
            danger.style.pointerEvents="none";
            wraper.style.cursor="not-allowed"
            gameO.play()
        }

        const guessHandler = (e) => {
            e.preventDefault()
            setRemeaningChance(remeaningChance-1)
            setUsedChance(usedChance+1)
            setGuessedNo([ guessingNo, ...guessedNo])

        if(guessingNo.match(/[0-9]/)){
                if(guessingNo > randomNo){
                    setHigher(true)
                    wrongS.play()
                }
                if(guessingNo < randomNo){
                    setLower(true)
                    wrongS.play()
                }
                if(guessingNo==0){
                    console.log('Error');
                    alert('hello')
                }
                if(guessingNo == randomNo ){
                        winS.play()
                        let bg = document.getElementById("background")
                        bg.style.display="block"
                        let danger = document.getElementById("guess-bt")
                        let wraper = document.getElementById("wraper")
                        danger.style.pointerEvents="none";
                        wraper.style.cursor="not-allowed"
                        setRemeaningChance(remeaningChance)
                        setGuessedNo(guessedNo)
                        document.getElementById("guess-number").disabled= true
                    }
            }else{
                setRemeaningChance(remeaningChance)
                setUsedChance(usedChance)
                setOnlyNo(true)
                wrongS.play()
            }
    }

    const restart = (e) => {
        e.preventDefault()
        startS.play()
        setGuessingNo(0)
        setUsedChance(0)
        setRemeaningChance(15)
        setGuessedNo([])
        playerData.pDifficulty=10
        let danger = document.getElementById("guess-bt")
        let wraper = document.getElementById("wraper")
        danger.style.pointerEvents="all";
        wraper.style.cursor="pointer";
        setRandomNo(Math.floor(Math.random()*(playerData.pDifficulty || 10))+1)
        let bg = document.getElementById("background")
                bg.style.display="none"
    }
    
  return (
    <div className='center-section-div'>
                <div className="center-container">
                            <div className="player-name">
                                {playerData && <p className="name"><GiAmericanFootballPlayer id='user-icon' /><br className="br-class" />
                                {playerData && playerData.pName}&nbsp; <br className="br-class" />
                                <span className="need-guess">( 1 - {playerData && playerData.pDifficulty} )</span>
                                 </p>}
                            </div>
                            <form action="submit">
                            <div className="g-number-div" id='guess-div'>
                                    <input className='guess-number' id='guess-number' ref={inputRef}  value={guessingNo} onChange={ e => setGuessingNo(e.target.value)} type="number" placeholder='No.'/><br />
                            </div>
                            <div className="control-btns">
                                <div className="inner-div">
                                    <div id="wraper">
                                    <button id='guess-bt' className="guess-bt" onClick={ guessHandler }>Guess</button>
                                    </div>
                                    <button className="re-start-bt" onClick={restart}>Re-Start</button>
                                </div>
                            </div>
                            </form>
                </div>
                {showMessage && <StartMessage setShowSorry={setShowSorry} setRandomNo={setRandomNo} setShowMessage={ setShowMessage }/> }
                {remeaningChance < 15 && <GuessedNo guessedNo = { guessedNo }/>}
                {showSuc && <ErrorWindow id='su' message={"Player Successfully Registered"} off={setShowSuc}/>}
                {higher && <ErrorWindow id='hi' message={"You Guessed it Hight.."} off={setHigher}/>}
                {lower && <ErrorWindow id='lo' message={"You Guessed it Low"} off={setLower}/>}
                {showErr2 && <ErrorWindow id='er' message={"You are not Playing this game, first Refresh Page and click on Play"} off={setShowErr2}/>}
                {onlyNo && <ErrorWindow id='er' message={"Please Enter only Numbers"} off={setOnlyNo}/>}
                {showSorry && <SorryCompo /> }
                <div id="background">
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={700}
                    />
                    
                </div>
    </div>
  )
}
