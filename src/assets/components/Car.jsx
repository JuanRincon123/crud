
const Car = ({ car, deleteCardById }) => {


    const handleDeleteCar = () =>{
        deleteCardById(car.id)
    }
    return (
        <article>
            <h2>{`#${car.id} ${car.brand} ${car.model}`}</h2>
            <ul>
                <li><span>Color: </span><span>{car.color}</span></li>
                <li><span>Year: </span><span>{car.year}</span></li>
                <li><span>Price: </span><span>{car.price}</span></li>
            </ul>
            <button onClick={handleDeleteCar}>Delete This Car</button>
        </article>
    )
}

export default Car
