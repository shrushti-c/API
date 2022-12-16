import React from 'react'

const Skeleton = ({item}) => {
  return[...Array(item).keys()].map(() =>(
    <div className='animate'>
<div className='bg-color'>
    <p>Loading..</p>

</div>
    </div>
  ))
}

export default Skeleton
