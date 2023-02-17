import React, { useState } from 'react'
import axios from 'axios'
import DisplayRondomDogs from './DisplayRondomDogs'
import './DisplayRondomDogs'
import { Link, useNavigate } from 'react-router-dom'

const RandomDogImages = () => {
    const navigate = useNavigate()
    const [images , setImages ] = useState([])

    const getImages = () => {
        axios.get('https://dog.ceo/api/breeds/image/random/3')
        .then(res => {
            console.log(res.data.message)
            setImages(res.data.message)
        })
        .catch(error =>{
            console.log(error)
        })
      }
 
  return (
    <div className='page2'>
    <div className='random_dogs_container'>
    <button title='Head back to the Home page' className='btn' onClick={() => navigate(-1)}>Back</button>
      <button className='btn' onClick={getImages}>Change Images</button>
    <Link  className='btn' title='page 3' to='/breed'>Next Page</Link>
      <br></br>
      <p>Showing three random images from random api endpoint on click of a button</p>
      <DisplayRondomDogs  images = {images}/> 
    </div>
    </div>
  )
}

export default RandomDogImages
