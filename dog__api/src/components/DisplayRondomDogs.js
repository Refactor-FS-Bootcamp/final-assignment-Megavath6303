import React from 'react'
import './DisplayRondomDogs.css'
const DisplayRondomDogs = ({images}) => {
  return (

    images.map(image => {
        return (
          <div className='random__Dogs'>
            <img src={image} alt='dogs' />
            </div>
        )
    })
  )
}

export default DisplayRondomDogs
