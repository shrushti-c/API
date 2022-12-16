import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';
import './components.css'
const Search = () => {
    const [SearchValue, setSearchValue] =useState("");
    const {fetchData} = useContext(ImageContext);

    const handleInputChange=(e) => {
        setSearchValue(e.target.value);
    }
    const handleButtonSearch =() => {
        fetchData(`search/photos?page=1&query=${SearchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue("");
    }
const handleKey = e => {
    if(e.key === 'Enter')
    {
        fetchData(`search/photos?page=1&query=${SearchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearchValue("");
    }
}
  return (
    <div className='searchbar'>
      <input type="search" placeholder='Search Anything!' value={SearchValue} onChange={handleInputChange} onKeyDown={handleKey}/>
      <button onClick={handleButtonSearch} disabled={!SearchValue} className='button'>Search</button>
    </div>
  )
}

export default Search
