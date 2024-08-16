import React from 'react'
import './Team.css'

export default function Team() {
  return (
    <div className='team-container'>
        <div className="title">
            <h3>What Our Customers Say</h3>
        </div>
        <div className="desc">
            <p>Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.</p>
        </div>
        <div className="image">
            <img src="./images/profile.jpg" alt="profile" />
            <p>Achovfx</p>
        </div>
    </div>
  )
}
