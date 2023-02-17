import React, { useState , useEffect} from 'react'
import axios from 'axios'
import DisplayDogs from './DisplayDogs'
import './FetchingDogImages.css'
import { Link } from 'react-router-dom'


const FetchingDogImages = () => {
    const [posts , setPosts] = useState([])

    useEffect(() => {
        axios.get('https://dog.ceo/api/breed/hound/images')
        .then(res =>{
            console.log(res)
            setPosts(res.data.message)
        })
        .catch(error => {
            console.log(error)
    })
    },[]) 

  return (
    <div className='container'>
      <h1>Images of all Dogs  </h1><hr></hr>
      <p>There will be three pages in this app. First will show all the images of dogs from API endpoint.
         Second will show three random images from another API endpoint on click of a button. 
         And the third will show all breeds of dogs from another API endpoint.<br></br><br></br>
       - MEGAVATH MADHU <Link title='Move to the next page ' className='random__link' to='random'>Next Page</Link></p>
      <DisplayDogs posts ={ posts} />
    </div>
  
  )
}

export default FetchingDogImages
