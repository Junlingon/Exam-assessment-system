import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRes } from '@/utils/https';
import { RootState } from '../index'

//state
const initialState = {
	subject_tree: [],
	active_two: null,
}

//action
export const get_subject_tree_async = createAsyncThunk('get/subject_tree', async (action, state) => {
	const res: AxiosRes = await axios.get('/api/subject')
	return res.data.data
})

export const subjectSlice = createSlice({
	name: 'subject',
	initialState,
	reducers: {

	},
	//reducers
	extraReducers: (builder) => {
		builder.addCase(get_subject_tree_async.fulfilled, (state, res) => {
			state.subject_tree = res.payload
		});
	},
})

// 获取课程树形数据
export const select_subject_tree = (state: RootState) => {
	return state.subject.subject_tree
}

export default subjectSlice.reducer
