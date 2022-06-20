import './SorryCompo.css'
import sad from '../../assests/sad.png'

export const SorryCompo = () => {
  return (
    <div className='sorry-div'>
        <div className="sorry-container">
            <div className="heading-sorry">
                <img src={ sad } alt="" />
                <h2 className="sorry-text">I am really sorry to see you that you are not playing me.</h2>
            </div>
        </div>
    </div>
  )
}
