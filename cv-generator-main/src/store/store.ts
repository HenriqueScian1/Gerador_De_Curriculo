import { configureStore } from '@reduxjs/toolkit'
import cvReducer from './reducers/cv.reducer'
import modalReducer from './reducers/modal.reducer'

export const store = configureStore({
  reducer: {
    cv: cvReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch