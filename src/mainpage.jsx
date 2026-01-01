import React from 'react'
import './style.css'
const Mainpage = () => {
  return (
    <div className='mainpage--mp'>
        <div className="header--navbar">
            <img src="./src/assets/connectU_logo.png" alt="logo" className='mainlogo'/>
            <div className="logo--desc">
                <h2 className='logo--heading'>TeamUp</h2>
                <p>Find your perfect team</p>
            </div>
            <button className='notification--navbar'>Notification</button>
        </div>
        <div className="search--teams">
            <input type="text" placeholder='Seach for events and Teams...' className='search--tab' />
        </div>
        <section className='browsing--section'>
            <div className="browsing--options">
                <button className='browse--op'>Events</button>
                <button className='browse--op'>Teams</button>
                <button className='browse--op'>For You</button>
                <button className='browse--op'>Profile</button>
            </div>

        </section>
    </div>
  )
}

export default Mainpage