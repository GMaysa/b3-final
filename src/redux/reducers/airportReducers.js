import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    airportData: {},
}

const airportData = createSlice({
    name: 'airportData',
    initialState,
    reducers: {
        setAirportData: (state, action) => {
            state.airportData = action.payload
        }
    }
})

export const { setAirportData } = airportData.actions

export default airportData.reducer