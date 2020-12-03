import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {
  const state = useSelector(state => state)
  console.log('in test: ', state)
  return <div>test works</div>
}

export default Test
