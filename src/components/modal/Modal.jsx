import './Modal.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsInfoLg } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorWindow } from '../errorWindow/ErrorWindow';
import { InfoModal } from '../infoModal/InfoModal';
import error from '../../assests/sounds/error.mp3'
import welcome from '../../assests/sounds/welcome.mp3'

export const Modal = ({setShowModal, setShowM, setShowRIght, setShoeCent,setShowSorry, setWinBg}) => {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])

    const [pName, setPName] = useState('')
    const [pAge, setPAge] = useState('')
    const [pDifficulty, setPDifficulty] = useState(10)
    const [showError, setShowError] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [onlyNo, setOnlyNo] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        document.addEventListener('keydown', clickHandler)
        return() => {
            document.removeEventListener('keydown', clickHandler)
        }
    },[])
    const clickHandler = (e) => {
        if(e.keyCode==27){
                setShowModal(false)
                setShowRIght(false)
                setShowSorry(true)
                setShoeCent(false)
        }
    }

    const age = [];
    for(let i=9;i<99;i++){
       age.push(i+1)
    }  

    const sound = new Audio(error)
    const welcomeS = new Audio(welcome)

    const submitForm = (e) => {
        e.preventDefault()
        if( pName && pAge ){
            // if(pDifficulty.match(/[1-9]/)){            
        dispatch({
            type: 'PLAYER_REGISTER',
            payload:{
                pName, pAge, pDifficulty
            }
        })
        setShowModal(false)
        setShowM(true)
        setWinBg(false)
        welcomeS.play()
    // }else{
    //     setOnlyNo(true)
    // }
    }else{
        sound.play()
        setShowError(true)
    }
}
const closeModal = () => {
    setShowModal(false)
    setShowRIght(false)
    setShowSorry(true)
    setShoeCent(false)
}

  return (
    <div className='modal-div'>
            <div className="container-modal">
                    <div className="header-div"><AiFillCloseCircle onClick={ closeModal } className='close-bt'/></div>
                    <div className="center-modal-div">
                    <form action="" className="modal-form">
                            <label htmlFor="pName">Player Name</label>
                            <input className='input-field' type="text" ref={inputRef} placeholder='Enter your name' value={pName} onChange={ e=> setPName(e.target.value)}/>
                            <div className="flex-option-div">
                                <div className="left-side">
                                <label htmlFor="pAge">Age</label>
                                        <select name="" id="" className='input-field' value={pAge} onChange={ e=> setPAge(e.target.value)}>
                                            <option value='' disabled>-- select --</option>
                                            {age.map(ag => <option key={ag} value={ag}>{ag} Years</option>)}
                                        </select>
                                </div>
                                <div className="right-side">
                                    <label htmlFor="difficulty">Difficulty</label>
                                    <input type="number" min="1" placeholder='Highest random guessable no. ' className='input-field'  value={pDifficulty} onChange={ e=> setPDifficulty(e.target.value)}/>
                                </div>
                            </div>
                            <button className='modal-dubmit-bt' onClick={ submitForm }>SUBMIT</button>
                            <div className="modal-footer">
                                <BsInfoLg className='info-icon' onClick={() => setShowInfo(true)}/>
                            </div>
                    </form>
                    </div>
            </div>
            {showError && <ErrorWindow id='er' message={"Name and Age Fields are Mandatory"} off={setShowError}/>}
            {showInfo && <InfoModal setShowInfo={setShowInfo}/>}
            {onlyNo && <ErrorWindow id='er' message={"Only Numbers Allowed ( 1-9 )"}  off={setOnlyNo}/>}
    </div>
  )
}
