import axios from 'axios'
import { useState } from 'react'

const useFetch = () => {

  const baseUrl = 'http://cars-crud.academlo.tech/'

  const [cars, setCars] = useState()


  const getAllCars = () => {
    axios.get(`${baseUrl}cars/`)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

  const createNewCard = (data) => {
    axios.post(`${baseUrl}cars/`, data)
      .then(res => {
        console.log(res.data)
        setCars([...cars, res.data])
      })
      .catch(err => console.log(err))
  }
  const deleteCarById = (id) => {
    axios.delete(`${baseUrl}cars/${id}`)
      .then(res => {
        console.log(res.data)
        const carsFilter = cars.filter(car => car.id !== id)
        setCars(carsFilter)
      })
      .catch(err => console.log(err))
  }
  return [cars, getAllCars, createNewCard, deleteCarById]
}





export default useFetch