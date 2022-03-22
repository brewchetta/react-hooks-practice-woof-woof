import React, { useState, useEffect } from "react";
import DogBar from './DogBar'
import DogDetail from './DogDetail'

function App() {

  const [doggos, setDoggos] = useState([])
  const [dogDetail, setDogDetail] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(res => res.json())
    .then(data => setDoggos(data))
  }, [])

  function updateDoggo(updatedDoggo) {
    setDogDetail(updatedDoggo)
    const updatedDoggosList = doggos.map(dog => {
      if (dog.id !== updatedDoggo.id) {
        return dog
      } else {
        return updatedDoggo
      }
    })

    setDoggos(updatedDoggosList)
  }

  return (
    <div className="App">

      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>

      <div id="dog-bar">
        <DogBar doggos={doggos} setDogDetail={setDogDetail} />
      </div>

      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDetail dogDetail={dogDetail} updateDoggo={updateDoggo} />
        </div>
      </div>

    </div>
  );
}

export default App;
