import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRes } from '@/utils/https';
import { RootState } from '../index'

//state
const initialState = {
	subject_tree: [],
	active_two: {
		title: '',//二级课程名称
		value: '',//二级课程id
	},
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
		set_subject_active_two: (state, action) => {
			state.active_two = action.payload
		},
	},
	//异步reducers
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
// 获取当前选择课程
export const select_active_two = (state: RootState) => {
	return state.subject.active_two
}

export const { set_subject_active_two } = subjectSlice.actions
export default subjectSlice.reducer
