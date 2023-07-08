import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import {BASE_URL} from '../../utils/constants.js'

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkApi) => {
    try{
        const res = await axios.get(`${BASE_URL}/categories`)
        return res.data
    } catch (err) {
        console.log(err);
        return thunkApi.rejectWithValue(err)
    }
})

const categoriesSlice = createSlice({
    name:'categories', 
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {builder.addCase(getCategories.pending, (state, {payload}) => {
        state.isLoading = true
    })}

})


export default categoriesSlice