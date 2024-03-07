import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const FormCar = ({ createNewCar, updateInfo,updateCarById,setUpdateInfo }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])



    const submit = (data) => {
        if (updateInfo) {
            updateCarById(updateInfo.id,data)
            setUpdateInfo() 
        } else {

            createNewCar(data)

        }
        reset({
            brand: '',
            model: '',
            color: '',
            year: '',
            price: ''
        })
    }
    return (
        <form className='form-register' onSubmit={handleSubmit(submit)}>
            <div>
            <h1>Create New Car</h1>
                <div>
                    <label  htmlFor="brand" >Brand:</label>
                    <input placeholder='Toyota EX7'className='controls'{...register('brand', { required: "this is required" })} id='brand' type="text" /></div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input placeholder='Coupé' className='controls'{...register('model')} id='model' type="text" /></div>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input placeholder='Black' className='controls'{...register('color')} id='color' type="text" /></div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input placeholder='2020' className='controls'{...register('year')} id='year' type="text" /></div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input placeholder='1000000' className='controls'{...register('price')} id='price' type="text" /></div>
            </div>
            <br />
            <button className='butons'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormCar
