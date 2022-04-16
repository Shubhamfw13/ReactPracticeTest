import { Routes, Route } from "react-router-dom"
import { AddCityy } from "./AddCity"
import { AddCountryy } from "./AddCountry"

import { HomePage } from "./HomePage"


export const AllRoutes = () => {

    return <>

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addcity" element={<AddCityy />} />
            <Route path="/addcountry" element={<AddCountryy />} />
        </Routes>




    </>
}