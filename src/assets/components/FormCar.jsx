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
                    <label  htmlFor="brand" ></label>
                    <input placeholder='Brand'className='controls'{...register('brand', { required: true })} id='brand' type="text" /></div>
                <div>
                    <label htmlFor="model"></label>
                    <input placeholder='Model' className='controls'{...register('model', { required: true })} id='model' type="text" /></div>
                <div>
                    <label htmlFor="color"></label>
                    <input placeholder='Color' className='controls'{...register('color', { required: true })} id='color' type="text" /></div>
                <div>
                    <label htmlFor="year"></label>
                    <input placeholder='Year' className='controls'{...register('year', { required: true })} id='year' type="text" /></div>
                <div>
                    <label htmlFor="price"></label>
                    <input placeholder='Price' className='controls'{...register('price', { required: true })} id='price' type="text" /></div>
            </div>
            <br />
            <button className='butons'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormCar
