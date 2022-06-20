import './GuessedNo.css'

export const GuessedNo = ({ guessedNo }) => {
  return (
    <div className='guessed-number'>
            <div className="container-guessed">
                    <h1 className='guessed-text'>Guessed No</h1>
                    <div className="map-div">
                    {guessedNo.map((no, i) =><p key={i} className='guess-no'>{ no }</p> )}
                    </div>
            </div>
    </div>
  )
}
