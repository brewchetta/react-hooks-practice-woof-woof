function DogBar({doggos, setDogDetail}) {

    const mappedDoggos = doggos.map(doggo => {
        return <span key={doggo.id} onClick={() => setDogDetail(doggo)}>{doggo.name}</span>
    })

    return (
        <>
            {mappedDoggos}
        </>
    )

}

export default DogBar