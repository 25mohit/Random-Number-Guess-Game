import './Right.css'
import { ReminingChance } from '../reminingChance/ReminingChance'

export const Right = ({remeaningChance,usedChance}) => {
  return (
    <div className='right-section-div'>
        <ReminingChance usedChance={usedChance} remeaningChance={remeaningChance} />
    </div>
  )
}
