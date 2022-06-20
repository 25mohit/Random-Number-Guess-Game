import './Right.css'
import { ReminingChance } from '../reminingChance/ReminingChance'

export const Right = ({remeaningChance}) => {
  return (
    <div className='right-section-div'>
        <ReminingChance remeaningChance={remeaningChance} />
    </div>
  )
}
