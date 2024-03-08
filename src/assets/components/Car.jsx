import React from "react"
const Car = ({ car, deleteCardById,setUpdateInfo }) => {


    const handleDeleteCar = () =>{
        deleteCardById(car.id)
    }
    const handleUpdate = () =>{
        setUpdateInfo(car)
    }
    return (
        
        <article className="form-register"> 
        <h4 style={{color:'gray', fontSize:20}}>#{car.id}</h4>
            <h2>{` ${car.brand} - ${car.model}`}</h2>
            <ul style={{marginLeft:95}} >
                <li style={{padding:5}}><span style={{color:"#FFD700",fontSize:23}}>Color </span><span style={{fontSize:20,marginLeft:15 }}>{car.color}</span></li>
                <li style={{padding:5}}><span style={{color:"#FFD700",fontSize:23}}>Year </span><span style={{fontSize:20,marginLeft:15 }}>{car.year}</span></li>
                <li style={{padding:5}}><span style={{color:"#FFD700",fontSize:23}}>Price </span><span style={{fontSize:20,marginLeft:15 }}>{car.price}</span></li>
            </ul>
            <button className='butons' onClick={handleDeleteCar}>Delete This Car</button>
            <button className='butons'onClick={handleUpdate}>Update This Car</button>
        </article>
    )
}

export default Car
