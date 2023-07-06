import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchResults: {}
}

const searchSlicer = createSlice({
    name: 'searchFlight',
    initialState,
    reducers: {
        setFlight: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const { setFlight } = searchSlicer.actions

export default searchSlicer.reducer