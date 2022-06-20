import './Center.css'
import { useSelector } from 'react-redux'
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { StartMessage } from '../startMessage/StartMessage';
import { useEffect, useRef, useState } from 'react';
import { GuessedNo } from '../guessedNo/GuessedNo';
import { ErrorWindow } from '../errorWindow/ErrorWindow';
import Confetti from 'react-confetti'

export const Center = ({ showM,remeaningChance, setRemeaningChance,setStartWatch }) => {
    const [showMessage, setShowMessage] = useState(false)
    const [guessingNo, setGuessingNo] = useState(0)
    const [randomNo, setRandomNo] = useState('')
    const [guessedNo, setGuessedNo] = useState([])
    const [showSuc, setShowSuc] = useState(false)

    const [lower, setLower] = useState(false)
    const [higher, setHigher] = useState(false)

    const playerData = useSelector(state => state.playerData)

    useEffect(() => {
        console.log("useEffect");
        const interval = setInterval(() => {
            console.log("setInterval");
            showM && setShowMessage(true)
            clearInterval(interval)
            console.log("clearInterval");
        },100)
    },[showM])

    useEffect(() => {
        const interval = setInterval(() => {
            showM && setShowSuc(true)
            clearInterval(interval)
        },1)
    },[showM])

    // const difficulty = playerData.pDifficulty
    const guessHandler = () => {
        setRemeaningChance(remeaningChance-1)
        if(guessingNo > randomNo){
            setHigher(true)
        }
        if(guessingNo < randomNo){
            setLower(true)
        }
        if(guessingNo == randomNo){
                console.log("RIGHT");
                let bg = document.getElementById("background")
                bg.style.display="block"
                let danger = document.getElementById("guess-bt")
                let wraper = document.getElementById("wraper")
                danger.style.pointerEvents="none";
                wraper.style.cursor="not-allowed"
            }
            setGuessedNo([ guessingNo, ...guessedNo])
            if(remeaningChance <=1){
            // alert('You Ran Out Of Chance')
                let danger = document.getElementById("guess-bt")
                let wraper = document.getElementById("wraper")
                danger.style.pointerEvents="none";
                wraper.style.cursor="not-allowed"
        }
    }
    const restart = () => {
        setGuessingNo(0)
        setRemeaningChance(15)
        setGuessedNo([])
        let danger = document.getElementById("guess-bt")
        let wraper = document.getElementById("wraper")
        danger.style.pointerEvents="all";
        wraper.style.cursor="pointer";
        setRandomNo(Math.floor(Math.random()*(playerData.pDifficulty || 10)))
        let bg = document.getElementById("background")
                bg.style.display="none"
    }
    console.log(`Guess No Center Div ${randomNo}`);
    console.log(guessedNo);

  return (
    <div className='center-section-div'>
                <div className="center-container">
                            <div className="player-name">
                                { randomNo}
                                <p className="name"><GiAmericanFootballPlayer id='user-icon' />{playerData && playerData.pName}, {playerData && playerData.pAge} Years young </p>
                            </div>
                            <div className="g-number-div">
                                    {/* <p className="guess-number">{guessingNo}</p> */}
                                    <input className='guess-number' value={guessingNo} onChange={ e => setGuessingNo(e.target.value)} type="number" placeholder='No'/><br />
                            </div>
                            <div className="control-btns">
                                <div className="inner-div">
                                    <div id="wraper">
                                    <button id='guess-bt' className="guess-bt" onClick={ guessHandler }>Guess</button>
                                    </div>
                                    <button className="re-start-bt" onClick={restart}>Re-Start</button>
                                </div>
                            </div>
                </div>
                {showMessage && <StartMessage setStartWatch={setStartWatch} setRandomNo={setRandomNo} setShowMessage={ setShowMessage }/> }
                {remeaningChance < 15 && <GuessedNo guessedNo = { guessedNo }/>}
                {showSuc && <ErrorWindow id='su' message={"Player Successfully Registered"} off={setShowSuc}/>}
                {higher && <ErrorWindow id='hi' message={"You Guessed it Hight.."} off={setHigher}/>}
                {lower && <ErrorWindow id='lo' message={"You Guessed it Low"} off={setLower}/>}
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
