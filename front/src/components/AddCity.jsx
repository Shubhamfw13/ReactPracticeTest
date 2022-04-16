import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { AddCountry, AddCity } from "../cityCountry/action"
export const AddCityy = () => {

    const [city, setCity] = useState({
        city_name: "",
        population: "",
        country_name: ""
    })


    const dispatch = useDispatch()
    const addcity = () => {

        dispatch(AddCity(city.city_name, city.population, city.country_name))
        alert("city Added")
    }


    const handleChange = (e) => {
        let { className, value } = e.target
        setCity({ ...city, [className]: value })

    }


    return <>
        <h2>Add city</h2>
        <input type="text" placeholder="enter city" className='city_name' onChange={handleChange} />
        <br /> <br />

        <input type="text" placeholder='country' className="country_name" onChange={handleChange} />
        <br /> <br />
        <input type="text" placeholder="population" className='population' onChange={handleChange} />


        <br /> <br />
        <Button variant="contained" color="success" onClick={addcity}>
            Add Country
        </Button>

    </>
}