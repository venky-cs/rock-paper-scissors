import React, { FC, useState } from 'react';
import './Header.css';
import logo from './logo.svg'
import store from '../../Redux/store';

const Header: FC = () => {
    const [score, setScore] = useState<number>(0);
    store.subscribe(() => {
        setScore(store.getState().counter.score);
    });
    return (
        <div className="header">
            <div className="title">
                <img src={logo} alt="logo" />
            </div>

            <div className="score">
                <h3>SCORE</h3>
                <h1>{score}</h1>
            </div>
        </div>
    );
};

export default Header;
