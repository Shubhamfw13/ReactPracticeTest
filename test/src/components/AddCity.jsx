import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { AddCountry, AddCity } from "../cityCountry/action"
export const AddCityy = () => {

    const [city, setCity] = useState({
        city: "",
        population: ""
    })
    console.log(city)

    const dispatch = useDispatch()
    const addcity = () => {

        dispatch(AddCity(city.city))
        alert("city Added")
    }

    const handleChange = (e) => {
        let { className, value } = e.target
        setCity({ ...city, [className]: value })

    }

    return <>
        <h2>Add city</h2>
        <input type="text" placeholder="enter city" className='city' onChange={handleChange} />
        <br /> <br />
        <input type="text" placeholder="population" className='population' onChange={handleChange} />


        <br /> <br />
        <Button variant="contained" color="success" onClick={addcity}>
            Add Country
        </Button>

    </>
}