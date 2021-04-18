import React,{ FC, useState} from 'react'
import './Footer.css'

const Footer: FC= () => {
    const [popUp, setPopUp] = useState<Boolean>(false)
    return (
        <div className='footer'>
            <button onClick={model}>RULES</button>

            {popUp &&
            <div className="box">
                <div className="model">
                <div className="top">
                    <h3>RULES</h3>
                    <h3 onClick={model}>X</h3>
                </div>
                <div className="rules">
                    <div className="img">
                    </div>
                </div>
                </div>
            </div>
            }
        </div>
    )

    function model():void{
        setPopUp(prevState => !prevState)
    }
}

export default Footer
