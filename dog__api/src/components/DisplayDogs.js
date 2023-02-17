import React from 'react'
import './DisplayDogs.css'
const DisplayDogs = ({posts}) => {
  return (
   
       posts.map((post) => { 
        return (
            <div className='dogs__posts'> 
                <img src={post} alt='dogs' />
            </div>
            
        )
       })
    
  )
}

export default DisplayDogs
