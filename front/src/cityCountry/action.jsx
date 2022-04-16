import axios from "axios"
import { useSelector } from "react-redux"
import * as types from "./type"

const countryAddReq = (payload) => ({ type: types.COUNTRY_ADD_REQ, payload })
const countryAdded = (payload) => ({ type: types.COUNTRY_ADDED, payload })
const countryAddFail = (payload) => ({ type: types.COUNTRY_ADD_FAIL, payload })

const cityAddReq = (payload) => ({ type: types.CITY_ADD_REQ, payload })
const cityAdded = (payload) => ({ type: types.CITY_ADDED, payload })
const cityAddFail = (payload) => ({ type: types.CITY_ADD_FAIL, payload })

const reqCityData = (payload) => ({ type: types.REQ_CITY_DATA, payload })
const getCityData = (data) => ({ type: types.GET_CITY_DATA, payload: data })
const reqCityDataFail = (payload) => ({ type: types.REQ_CITY_DATA_FAIL, payload })



const Get_Data = () => async (dispatch) => {



    dispatch(reqCityData())

    axios.get("https://reactreduxtesteval.herokuapp.com/cities").then((res) => {
        console.log("resp", res.data)
        dispatch(getCityData(res.data))
    }).catch((error) => {
        dispatch(reqCityDataFail(error))
    })

}




const AddCountry = (country) => async (dispatch) => {

    dispatch(countryAddReq({ msg: "Loading" }))

    const res = await axios.post("http://localhost:8080/add-country", {
        country
    }).catch((err) => {
        dispatch(countryAddFail({ msg: err.response.data }))
    })
    if (res) {
        dispatch(countryAdded(res.data.country))
    }
    console.log(res, "res")

}


const AddCity = (city_name, population, country_name) => async (dispatch) => {

    dispatch(cityAddReq({ msg: "Loading" }))

    const res = await axios.post("https://reactreduxtesteval.herokuapp.com/cities", {
        city_name,
        population,
        country_name
    }).catch((err) => {
        dispatch(cityAddFail({ msg: err.response.data }))
    })
    if (res) {
        dispatch(cityAdded(res.data.city))
    }
    console.log(res, "res")

}






export { AddCountry, AddCity, Get_Data }