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
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input {...register('brand', { required: "this is required" })} id='brand' type="text" /></div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input {...register('model')} id='model' type="text" /></div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input {...register('color')} id='color' type="text" /></div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input {...register('year')} id='year' type="text" /></div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input {...register('price')} id='price' type="text" /></div>
            </div>
            <br />
            <button>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormCar
