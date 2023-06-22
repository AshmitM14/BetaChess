import React from 'react'
import board from './Screenshot (43).png'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="container">
            <div className="content-wrapper">
                <img src={board} id='bimg' alt="board" />
                <div className="content">
                    <h1 className='mb-4'>Welcome to BetaChess!</h1>
                    <h1 className='mb-3'>Start Playing Free Online Chess Easily</h1>
                    <Link to="/play" className='btn btn-success b'>Play Now!</Link>
                </div>
            </div>
        </div>
    )
}
