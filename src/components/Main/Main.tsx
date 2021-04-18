import React, { FC, useState, useEffect } from 'react'
import './Main.css'
import { housePick, check } from '../../utils'

import store from '../../Redux/store'
import { increment } from '../../features/counter/counterSlice'

const Main: FC = () => {
    const [select, setSelect] = useState<string>('')
    const [com, setCom] = useState<string>('')
    const [ans, setAns] = useState<boolean>(true)

    const [result, setResult] = useState<string | undefined>('')

    useEffect(() => {
        // console.log(select, com)
        setResult(check(select, com));
    }, [select, com])

    useEffect(() => {
        if (result === 'you won') {
            store.dispatch(increment())
        }
    }, [result])

    return (
        <div className="main">
            {ans ?
                <div className="options">
                    <button onClick={(e) => choice(e)} className="rock"></button>
                    <button onClick={(e) => choice(e)} className="paper"></button>
                    <button onClick={(e) => choice(e)} className="scissors"></button>
                </div>
                : <div className="check">
                    <div>
                        <h3>YOU PICKED</h3>
                        <button className={select}></button>
                    </div>
                    <div className="result">
                        <h3>{result}</h3>
                        <button onClick={() => {
                            setAns(true);
                            setResult('');
                        }}>PLAY AGAIN</button>
                    </div>
                    <div>
                        <h3>THE HOUSE PICKED</h3>
                        <button className={com}></button>
                    </div>
                </div>
            }
        </div>
    )

    function choice(e: any) {
        setSelect(e.target.className)
        setCom(housePick(0, 2))
        setAns(false)
    }
}

export default Main
