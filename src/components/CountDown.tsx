'use client'
import React from 'react'
import Countdown from 'react-countdown'

const endingTime = new Date('2023-10-04')

const CountDown = () => {
  return (
    <div>
      <Countdown className='text-yellow-300 font-bold text-5xl' date={endingTime}/>
    </div>
  )
}

export default CountDown
