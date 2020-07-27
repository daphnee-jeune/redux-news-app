import {combineReducers} from "redux"
import fetchTech from "../reducers/Fetch_tech"
import customSearch from "../reducers/Custom_search"


//combine reducers
const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch
})

export default reducers