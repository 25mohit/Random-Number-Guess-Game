import React, { useEffect, useState } from 'react'
import './Stopwatch.css'
import { BiReset } from 'react-icons/bi';
import { TbPlayerPlay } from 'react-icons/tb';
import { TbPlayerPause } from 'react-icons/tb';

export const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [timer, setTimer] = useState(false)

    useEffect(() => {
            let interval = null;
            if(timer){
                interval = setInterval(() => {
                        setTime(preTime => preTime +10)
                },10)
            }else{
                clearInterval(interval)
            }
            return () => clearInterval(interval)
    },[timer])
    const reset = () => {
        setTime(0)
        setTimer(false)
    }

  return (
    <div className='stopwatch-div'>
            <p>{("0"+ Math.floor((time/60000)%60)).slice(-2)} :&nbsp;</p>
            <p>{("0"+Math.floor((time/1000)%60)).slice(-2)} :&nbsp;</p>
            <p>{("0"+((time/10)%100)).slice(-2)}</p>
            {setTimer &&
            <button onClick={() => setTimer(!timer)} id='start'>{timer ? <TbPlayerPause />:<TbPlayerPlay/>}</button>
            }
            <BiReset onClick={reset} id='reset' />
    </div>
  )
}
