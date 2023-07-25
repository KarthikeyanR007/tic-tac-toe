import React from 'react';
import { useState } from 'react';
import './Board.css'


const Square = ({value,onSquareClick}) => {
 
  return ( 
    < >
    <button className='square' onClick={onSquareClick}>{value}</button>
    </>
  )
}

export default Square
