// import { pick } from '@/util'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
export type Role = 'student' | 'admin' | 'super_admin'

interface BaseInfo {
	role: Role
	_id: string
	phone: string
	has_person_info: boolean
	img: string
}

interface ExtraInfo {
	avatar?: string
	created: string
	graduation_time: string
	money: string
	name: string
}

export type RoleState = BaseInfo & ExtraInfo

export interface RoleParams {
	phone: string
	code: string
}

const USER_INFO_KEY = 'userInfo'

// 获取用户信息
const getUserInfo = <T>() => {
	const data = window.localStorage.getItem(USER_INFO_KEY)
	if (!data)
		return {
			role: 'student',
			_id: '',
			phone: '',
			has_person_info: false,
			img: '',
		} as T
	return JSON.parse(data) as T
}

// 持久化存储用户信息
const setUserInfo = (data: RoleState) => {
	window.localStorage.setItem(USER_INFO_KEY, JSON.stringify(data))
}

const initialState = getUserInfo<RoleState>()

export const roleSlice = createSlice({
	name: 'role',
	initialState,
	reducers: {
		set_role(
			state,
			aciton: {
				payload: RoleState
			}
		) {
			setUserInfo(aciton.payload)
			state._id = aciton.payload._id
			state.has_person_info = aciton.payload.has_person_info
			state.img = aciton.payload.img
			state.phone = aciton.payload.phone
			state.role = aciton.payload.role
		},
		logout(state, aciton) {
			console.log('logout')

			localStorage.clear()
			state = getUserInfo<RoleState>()
		},
	},
})

// export const select_role = (state: RootState) => {
// 	return state.role.role
// }

// export const select_user_info = (state: RootState) => {
// 	return state.role
// }

export const { set_role, logout } = roleSlice.actions

export default roleSlice.reducer
