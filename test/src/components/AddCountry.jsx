import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { AddCountry } from "../cityCountry/action"
export const AddCountryy = () => {

    const [country, setCountry] = useState({
        country: ""
    })
    console.log(country)

    const dispatch = useDispatch()
    const addcountry = () => {

        dispatch(AddCountry(country.country))
        alert("Country Added")
    }

    const handleChange = (e) => {
        let { className, value } = e.target
        setCountry({ ...country, [className]: value })

    }




    return <>
        <h2>Add Country</h2>
        <input type="text" placeholder="enter country" className='country' onChange={handleChange} />
        <br /> <br />
        <Button variant="contained" color="success" onClick={addcountry}>
            Add Country
        </Button>



    </>
}