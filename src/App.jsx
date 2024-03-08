import { useEffect,useState } from 'react'
import './App.css'
import useFetchCars from '../hooks/useFetchCars'
import Car from './assets/components/Car'
import FormCar from './assets/components/FormCar'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [cars, getAllCars, createNewCar, deleteCarById,updateCarById,] = useFetchCars()

  const handleCreateCar = () => {
    createNewCar(data)
  }

  useEffect(() => {
    getAllCars()
  }, [])


  return (
    <div  className="container">
      <FormCar
      createNewCar={createNewCar}
      updateInfo={updateInfo}
      updateCarById={updateCarById}
      setUpdateInfo={setUpdateInfo}
      / >

     
      <div>
        {
          cars?.map(car => (
            <Car
            key={car.id}
            car={car}
            deleteCardById={deleteCarById}
            setUpdateInfo={setUpdateInfo}
            />
            ))
          }
      </div>
      <footer className='footer'>
        <h3 className='copy'>©CreateNewCar</h3>
      </footer>
    </div>
  )
}

export default App
