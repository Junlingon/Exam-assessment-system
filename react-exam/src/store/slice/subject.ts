import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	subject_tree: [],
	active_two: null,
}

export const subjectSlice = createSlice({
	name: 'subject',
	initialState,
	reducers: {

	},
	extraReducers: () => {
	},
})

export default subjectSlice.reducer
