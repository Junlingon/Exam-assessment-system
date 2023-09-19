import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import subjectReducer from './slice/subject';
import roleReducer from './slice/role';
import menuReducer from './slice/menu';
import examReducer from './slice/exam';

// 类型定义
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const store = configureStore({
	reducer: {
		subject: subjectReducer,
		role: roleReducer,
		menu: menuReducer,
		exam: examReducer
	},
})

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;