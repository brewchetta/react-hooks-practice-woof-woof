import { useState } from 'react'

function DogDetail({dogDetail, updateDoggo}) {

    function toggleGood() {
        const updatedDoggo = {...dogDetail, isGoodDog: !dogDetail.isGoodDog}
        updateDoggo(updatedDoggo)
    }
    
    return (
        <>

            <img src={dogDetail.image} alt={dogDetail.name} />
            <h2>{dogDetail.name}</h2>
            <button onClick={toggleGood}>{dogDetail.isGoodDog ? "Good dog!" : "Bad dog!" }</button>
        
        </>
    )

}

export default DogDetail