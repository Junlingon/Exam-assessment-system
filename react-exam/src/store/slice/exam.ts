import axios, { AxiosRes, ResData } from "@/utils/https";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { obj2Query } from '@/utils/index';
export type examquetions = {
  created: string;
  img: any[];
  title: string;
  two_id: string;
  _id: string;
  dec?: string;
};
const requestBody = {
  topic_list: [
    {
      title: "xxx",
      dec: "xxxx",
      img: "xxxx",
      answer: "xxx",
    },
    {
      title: "xxx",
      dec: "xxxx",
      img: "xxxx",
      answer: "xxx",
    },
  ],
  two_id: "xxxx",
};
type ActionType = {
  data: examquetions[],
  count: number
}
export const get_exam = createAsyncThunk<examquetions[], string>(
  "get/exam",
  async (aciton, state) => {
    const res = await axios.get(`/api/topic/${aciton}`);
    console.log(res);

    return res.data.data.map((item: examquetions, index: number) => {
      let rawValue = window.localStorage.getItem("topic_list");
      console.log(rawValue);

      return {
        ...item,
        isKeep: rawValue ? (rawValue[index] ? true : false) : false,
      };
    });
  }
);
export const get_exam_list = createAsyncThunk(
  "get/exam",
  async (action: any, state: any) => {
    let query = obj2Query(action)
    const res = await axios.get("/api/exam" + query, {

    });
    return res.data;
  }
);

const initialState = {
  exam: [],
  count: 0
};
export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(get_exam.fulfilled, (state, aciton: any) => {
      state.exam = aciton.payload.data;
      state.count = aciton.payload.count;
    });
  },
});

export const exam_list = (state: RootState) => {
  return state.exam.exam;
};
export const exam_list_count = (state: RootState) => {
  return state.exam.count;
};
export default examSlice.reducer;
