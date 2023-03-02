import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    answersUser: {},
    userReadiness: false,
    errorQuiz: '',
    startQuiz: false,
    questions: [],
    activeQuestionVariants: [],
    activeQuestion: '',
    numberQuestion: 1,
    answers: [],
    waitingResponse: true,
  },
  reducers: {
    getQuizError: (state, actions) => {
      state.errorQuiz = actions.payload;
    },
    getUserReady: () => {},
    getUserReadySuccess: (state, action) => {
      state.userReadiness = true;
      state.answersUser = action;
    },
    getUserUnready: () => {},
    getUserUnreadySuccess: (state) => {
      state.userReadiness = false;
      state.answersUser = {};
    },
    getStartQuiz: (state, action) => {
      state.startQuiz = action.payload;
    },
    getQuestions: () => {},
    getQuestionsSuccess: (state, action) => {
      state.questions = action.payload;
    },
    getActiveQuestion: (state) => {
      function shuffle(arr) {
        var j, temp;
        for (var i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        return arr;
      }

      let newArr = state.questions[state.numberQuestion - 1].incorrect_answers;
      newArr.push(state.questions[state.numberQuestion - 1].correct_answer);

      state.activeQuestion = state.questions[state.numberQuestion - 1].question;
      state.activeQuestionVariants = shuffle(newArr);
    },
    getResponseCheck: (state, action) => {
      state.waitingResponse = false;
      if (
        action.payload ===
        state.questions[state.numberQuestion - 1].correct_answer
      ) {
        state.answers = state.answers.concat({
          result: true,
          answer: action.payload,
          questionsNumber: state.numberQuestion,
        });
      } else {
        state.answers = state.answers.concat({
          result: false,
          answer: action.payload,
          questionsNumber: state.numberQuestion,
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getUserReady,
  getQuizError,
  getUserReadySuccess,
  getUserUnready,
  getUserUnreadySuccess,
  getStartQuiz,
  getQuestions,
  getQuestionsSuccess,
  getActiveQuestion,
  getResponseCheck,
} = quizSlice.actions;

export default quizSlice.reducer;
