import * as types from "./type"


const initialState = {

    loading: false,
    errMsg: false,
    country: [],
    city: [],
    countrys: [],
    citys: []

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case (types.COUNTRY_ADD_REQ):
            return { ...state, loading: true }
        case (types.COUNTRY_ADDED):
            return { ...state, loading: false, country: action.payload }
        case (types.COUNTRY_ADD_FAIL):
            return { ...state, loading: false, errMsg: true }



        case (types.CITY_ADD_REQ):
            return { ...state, loading: true }
        case (types.CITY_ADDED):
            return { ...state, loading: false, city: action.payload }
        case (types.CITY_ADD_FAIL):
            return { ...state, loading: false, errMsg: true }




        case (types.REQ_CITY_DATA):
            return { ...state, loading: true, }
        case (types.GET_CITY_DATA):
            return { ...state, loading: false, city: action.payload }
        case (types.REQ_CITY_DATA_FAIL):
            return { ...state, loading: false, error: true }

        default:
            return state
    }

}
export default reducer