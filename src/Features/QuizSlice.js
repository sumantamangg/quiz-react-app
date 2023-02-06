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
      answers: [],
      totalQuestions: 0,
      nextQuestionNumber: 1,
      correctAnswers: [],
      result: 0,
      quizComplete: false
    },
    reducers: {
      selectAnswer: (state, action) => {
        state.answers[state.currentQuestion] = action.payload;
        state.nextQuestionNumber = state.currentQuestion+1;
        console.log(state.currentQuestion, state.nextQuestionNumber, state.answers.length, state.totalQuestions)
      },
      nextQuestion: (state) => {
        state.currentQuestion += 1;
        state.nextQuestionNumber = state.currentQuestion+1;
        console.log(state.currentQuestion, state.nextQuestionNumber, state.answers.length, state.totalQuestions)
      },
      previousQuestion: (state) => {
        state.currentQuestion -= 1;
        state.nextQuestionNumber = state.currentQuestion+1;
      },
      calculateResult: (state) => {
        state.correctAnswers.forEach((element, index) => {
          if (element === state.answers[index]){
            state.result ++;
          }
        });
        state.quizComplete = true;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchQuiz.pending, (state) => {
          state.loading = true;
      })
        .addCase(fetchQuiz.fulfilled, (state, action) =>{
        state.loading = false;
        state.allQuestions = action.payload.results;
        state.totalQuestions = action.payload.results.length;
        const results = action.payload.results
        results.forEach(element => {
          state.correctAnswers.push(element.correct_answer)
        });
      })
        .addCase(fetchQuiz.rejected, (state, action) =>{
        state.loading = false;
        state.error = action.error;
      })
    },
  });

export const { resetQuiz, selectAnswer, nextQuestion, previousQuestion, calculateResult } = quizSlice.actions;
export default quizSlice.reducer;
