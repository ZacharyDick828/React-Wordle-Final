import React from 'react'

export default function Endgame({ isCorrect, turn, solution }) {
    return (
        <div className='endgame'>
            {isCorrect && (
                <div>
                    <h1> WINNERRR! YOU'RE A NERD GET SOME FRIENDS! </h1>
                    <p className='solution'>{solution}</p>
                    <p>YOU FOUND THE SOLUTION IN {turn} TURNS!</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>YOU SUCK! YOU'LL NEVER BEAT MY GAME</h1>
                    <p className='solution'>The Solution Was {solution}</p>
                </div>
            )}
        </div>
    )
}