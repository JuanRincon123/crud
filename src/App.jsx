import { useEffect } from 'react'
import './App.css'
import useFetchCars from '../hooks/useFetchCars'
import Car from './assets/components/Car'
import FormCar from './assets/components/FormCar'

function App() {

  const [cars, getAllCars, createNewCar, deleteCarById] = useFetchCars()

  const handleCreateCar = () => {
    createNewCar(data)
  }

  useEffect(() => {
    getAllCars()
  }, [])


  return (
    <div>
      <h1>Peticiones HTTP</h1>
      <FormCar/ >
      <br/>
      <hr />
     
      <div>
        {
          cars?.map(car => (
            <Car
            key={car.id}
            car={car}
            deleteCardById={deleteCarById}
            />
            ))
          }
      </div>
    </div>
  )
}

export default App
