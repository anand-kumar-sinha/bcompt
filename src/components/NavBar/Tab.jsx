import React from 'react'
import './NavBar.scss'

const Tab = ({name = 'upsc'}) => {
  return (
    <div className='Nav-tab'>
        {name}
    </div>
  )
}

export default Tab
