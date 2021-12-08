import PlantCard from "./PlantCard"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"


function GardenDetail({id}){
    
    const [plantList, setPlants] = useState([])

    useEffect(() => {
        fetch(`/gardens/${id}`)
            .then((r) => r.json())
            .then((plants) => {
                // console.log(users)
                setPlants(plants)
                console.log(plants)
                
            })
    }, [])


    return(
        
        <> 
        <h1>your plants</h1>

        <button class= "redirect_btn"> <Link class="redirect" to="/plant_form"> Add Plant </Link></button>
        <button class= "redirect_btn"> <Link class="redirect" to="/gardens"> Back </Link></button>

        <div id="plantCardsDiv">
        {console.log(plantList)}
        {plantList.map((plant) => {
            return (
                <div    >
                    <PlantCard plant={plant}/>
                </div>
            )})
            }
        
        </div>
        </>

        
    )
}

export default GardenDetail