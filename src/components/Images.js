import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image';
import './components.css'
import Skeleton from './Skeleton';
const Images = () => {
    const {response, isLoading} = useContext(ImageContext);
  return (
    <>
     <h1>Results</h1>
 
   
<div className='column'>
    {isLoading ? <Skeleton item={10} /> : response.map((data,key)=> <Image key={key} data={data} />)}
</div>
    
  
    </>
  )
}

export default Images
