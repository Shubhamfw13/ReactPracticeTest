import * as types from "./type"


const initialState = {

    loading: false,
    errMsg: '',
    country: {},
    city: {}

}


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case (types.COUNTRY_ADD_REQ):
            return { ...state, loading: true }
        case (types.COUNTRY_ADDED):
            return { ...state, loading: false, country: action.payload.country }
        case (types.COUNTRY_ADD_FAIL):
            return { ...state, loading: false, errMsg: action.payload.errMsg }

        case (types.CITY_ADD_REQ):
            return { ...state, loading: true }
        case (types.CITY_ADDED):
            return { ...state, loading: false, city: action.payload.city }
        case (types.CITY_ADD_FAIL):
            return { ...state, loading: false, errMsg: action.payload.errMsg }

        default:
            return state
    }

}
export default reducer