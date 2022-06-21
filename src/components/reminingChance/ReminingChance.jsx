import './reminingChance.css'

export const ReminingChance = ({remeaningChance,usedChance}) => {
        if(remeaningChance==7){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="orange"
                bg.style.transition="0.6s"
                bg.style.transform="rotate(360deg)"
        }
        if(remeaningChance==6){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="purple"
                bg.style.transition="0.6s"
        }
        if(remeaningChance==5){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="chocolate"
                bg.style.transition="0.6s"
        }
        if(remeaningChance==4){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="Yellow"
                bg.style.transition="0.6s"
        }
        if(remeaningChance==3){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="skyblue"
                bg.style.transition="0.6s"
        }
        if(remeaningChance==2){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="blue"
                bg.style.transition="0.6s"
        }
        if(remeaningChance==1){
                let bg = document.getElementById("remi-bg")
                bg.style.backgroundColor="red"
                bg.style.transition="0.6s"
        }
  return (
    <div className='ReminingChance'>
            <div className="container-ReminingChance" id='remi-bg'>
                    <div className="number-chance">
                            <p className="chance-number">{remeaningChance}</p>
                            <p className="chance-text">Chance</p>
                    </div>
                    <div className="remaining-div">
                            <p className="remaining-text">Remaining</p>
                    </div>
                    <div className="footer-remining">
                                <p className="taken-chance">{usedChance} chances taken</p>
                    </div>
            </div>
    </div>
  )
}
