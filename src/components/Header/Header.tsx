import React, { FC } from 'react'
import './Header.css'

const Header: FC = () => {
    return (
        <div className="header">
            <div className="title">
                <h3>Rock</h3>
                <h3>Paper</h3>
                <h3>Scissors</h3>
            </div>

            <div className="score">
                <span>SCORE</span>
            </div>
        </div>
    )
}

export default Header
