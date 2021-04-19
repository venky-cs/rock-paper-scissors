import React, { FC, useState } from 'react';
import './Header.css';
import store from '../../Redux/store';

const Header: FC = () => {
    const [score, setScore] = useState<number>(0);
    store.subscribe(() => {
        setScore(store.getState().counter.score);
    });
    return (
        <div className="header">
            <div className="title">
                <h3>ROCK</h3>
                <h3>PAPER</h3>
                <h3>SCISSORS</h3>
            </div>

            <div className="score">
                <h3>SCORE</h3>
                <h1>{score}</h1>
            </div>
        </div>
    );
};

export default Header;
