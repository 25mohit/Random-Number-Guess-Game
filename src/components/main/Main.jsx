import { useState } from 'react'
import './Main.css'

export const Main = () => {
    const [totalChance, setTotalChance] = useState(10)
    const [userChoice, setUserChoice] = useState(10)
    const [userGuess, setUserGuess] = useState(0)
    const [randomNumber, setRandomNumber] = useState(0)
    const [guesses, setGuesses] = useState([])

    const addUChoice = () => {
        setUserChoice(userChoice)
    }

    const randomNo = Math.ceil(Math.random()*userChoice);

    const gRandom = () => {
        console.log(randomNo);
        setRandomNumber(randomNo)
    }
    
    const guessHandler = () => {
        setTotalChance(totalChance-1)
        setGuesses([...guesses, userGuess])
        if(totalChance == 0){
            setGuesses([])
            setRandomNumber(0)
            setUserChoice(0)
            setTotalChance(0)
        }
        if(userGuess < randomNumber){
                alert("less")
        }
        if(userGuess > randomNumber){
                alert("greater")
        }
        if(userGuess == randomNumber){
                alert("success")
        }
    }
    const reStart = () => {
        setGuesses([])
        setRandomNumber(0)
        setUserChoice(10)
        setTotalChance(10)
    }

  return (
    <div className='main-div'>
            <input type="text" value={ userChoice } onChange={ e => setUserChoice(e.target.value)} placeholder='enter your choice' className='choice'/>
            <button className='add' onClick={ addUChoice }>ADD</button>
            <input type="text" value={ userGuess } onChange={e=>setUserGuess(e.target.value)} placeholder='enter your guess number...' className='guess' />
            <button onClick={ guessHandler } className='guess'>Guess</button>
            <button className="start" onClick={ gRandom }>START</button>
            <button onClick={ reStart }>RE-START</button>
            <p>Chances Rameaining : { totalChance }</p>
            <p>User Difficulty Choice: { userChoice }</p>
            <p>Random : { randomNumber }</p>
            <span  className='guesses-p'>Guesses : {
            guesses.map((guess , i) => <p key={i}>{ guess }</p>)}</span>
    </div>
  )
}
