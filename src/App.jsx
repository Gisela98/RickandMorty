import axios from 'axios'
import ResidentInfo from './components/ResidentInfo'
import Location from './components/Location'
import Loader from './components/Loader'
import InputSearch from './components/InputSearch'
import Title from './components/Title'
import useApiRickMorty from './components/hooks/ApiRickMorty'
import {useState, useEffect} from 'react'
import './App.css'

function App() {

const [searchLocation, setSearchLocation] = useState()


const location = useApiRickMorty(searchLocation)

  return (
    <div className="App">
      <Title />
      <InputSearch setSearchLocation={setSearchLocation}/>
      <Location location = {location}/>
      <Loader/>

      <div className='appcards'>
        {location?.residents.map(resident => (
          <ResidentInfo resident={resident}
          key={resident}
          />
        ))}
      </div>
    </div>
  )
}

export default App