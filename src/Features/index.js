import { createAsyncThunk, createSlice, configureStore } from "@reduxjs/toolkit"
import axios from "axios"

const API = "https://the-trivia-api.com/api/questions"



//initial state
const initialState = {
    questions: null,
    loading: false,
    error: null
}

//create Async Thunk
const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async () => {
    const data = await axios.get(API)
    return data.data
})

//create Slice
const quizSlice = createSlice({
    name: 'questions',
    initialState,
    extraReducers: (builder) => {
        //Handle lifecycle: pending, success and rejected
        //pending
        builder.addCase(fetchQuestions.pending, (state, action) => {
            state.loading = true
        })
        //fullfilled
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.questions = action.payload
            state.loading = false
        })
        //rejected
        builder.addCase(fetchQuestions.rejected, (state, action) => {
            state.questions = null
            state.loading = false
            state.error = action.payload
        })
    }
})


//generate reducer
const quizReducer = quizSlice.reducer

//create a store
const store = configureStore({
    reducer: quizReducer
})

export default store
