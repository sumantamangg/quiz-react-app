import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

//fetch quiz questions
export const fetchQuiz = createAsyncThunk(
    'data/fetchQuiz',
    async () => {
      try {
        //const response = await axios.get('https://the-trivia-api.com/api/questions')
        const response = await axios.get('https://mocki.io/v1/49752d6c-2809-4388-9d9b-3e498462e624')
        return response.data
      } catch (error) {
        return error
      }
    }
  )
const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
      loading: false,
      error: null,
      allQuestions: [],
      currentQuestion: 0,
      answers: []
    },
    reducers: {
      resetQuiz: (state) => {
        state.loading = false;
        state.error = null;
        state.allQuestions = [];
        state.currentQuestion = 0;
        state.answers = [];
      },
      selectAnswer: (state, action) => {
        state.answers[state.currentQuestion] = action.payload;
      },
      nextQuestion: (state) => {
        state.currentQuestion += 1;
      },
      previousQuestion: (state) => {
        state.currentQuestion -= 1;
      }
    },
    // extraReducers: {
    //   [fetchQuiz.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [fetchQuiz.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.quiz = action.payload;
    //   },
    //   [fetchQuiz.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.error;
    //   }
    // },
    extraReducers: (builder) => {
      builder
        .addCase(fetchQuiz.pending, (state) => {
          state.loading = true;
      })
        .addCase(fetchQuiz.fulfilled, (state, action) =>{
        state.loading = false;
        state.allQuestions = action.payload.results;
      })
        .addCase(fetchQuiz.rejected, (state, action) =>{
        state.loading = false;
        state.error = action.error;
      })
    },
  });

export const { resetQuiz, selectAnswer, nextQuestion, previousQuestion } = quizSlice.actions;
export default quizSlice.reducer;
