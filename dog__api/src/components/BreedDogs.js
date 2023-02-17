import React, { useEffect, useState } from 'react'
import './BreadDogs.css'
import { useNavigate } from 'react-router-dom'

const BreedDogs = () => {
  const navigate = useNavigate()
  const [breeds, setBreeds] = useState([]);
  
  const fetchBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all"
    );
    let breedList = await response.json();
    breedList = Object.keys(breedList.message);
    setBreeds(breedList);
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <div className='content'>
    <h1>Third page</h1>
    <h3> This page contains breed of all the dogs <button className='btn bttn' onClick={() => navigate(-1)}> Back </button></h3>
    <div>{
    breeds.map(breed => {
      return (
      <div className='breed__container'> 
      <div className='breed__dog'>
        {breed}
        </div>
      </div>

     )})
     
       } </div>
</div>
  )
}

export default BreedDogs
