import './ErrorWindow.css'

export const ErrorWindow = ({message,off, id}) => {
    setTimeout(() => {
        off(false)
    },2000)
  return (
    <div className='error-window' id={id}>
            <div className="container-error-window">
                <div className="side-bar"></div>
                  <p className="message">{message}</p>  
            </div>
    </div>
  )
}
