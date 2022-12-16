import React from 'react'
import './components.css'
const Image = ({ data }) => {
  return (
    <div className='row'>
    <a href={data.urls.regular}>
        <img src={data.urls.small} alt={data.alt_description}/>
    </a>
    </div>

  )
}

export default Image
