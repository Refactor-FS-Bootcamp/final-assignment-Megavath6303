import { Route, Routes } from 'react-router-dom';
import FetchingDogImages from './components/FetchingDogImages'
import RandomDogImages from './components/RandomDogImages'
import './App.css';
import BreedDogs from './components/BreedDogs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FetchingDogImages/>} />
        <Route path='random' element={<RandomDogImages/>} />
        <Route path='/breed' element={<BreedDogs/>} />
      </Routes>
    </div>
  );
}

export default App;
