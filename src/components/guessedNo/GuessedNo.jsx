import './GuessedNo.css'

export const GuessedNo = ({ guessedNo, randomNo }) => {

  return (
    <div className='guessed-number'>
            <div className="container-guessed">
                    <h1 className='guessed-text'>Guessed No</h1>
                    {/* <div className="map-div"> */}
                    {guessedNo.map((no, i) =><div className='map-div' key={i}>
                      <p className='guess-no'>{ no }</p> 
                      <p id={no > randomNo ? "High" : "Low" }>{no > randomNo ? "High" : "Low" }</p>
                      </div>)}
            </div>
    </div>
  )
}
