import axios from '@/utils/https';

const requstPath = "/api/exam";
/** 查询或者提交 */
export function examPost<T>(data: T) {
  return axios.post<T>(requstPath, data)
}
export function examGet<T>(data: string) {
  return axios.get<T>(requstPath + data)
}
export function examPath<T>(data: T) {
  return axios.patch<T>(requstPath, data)
}
type SumitBody = {
  topic_list: any[];
  two_id: string
}
export function createExamSubmitBody(data: SumitBody) {
  return Object.assign({ topic_list: [], two_id: '' }, data)

}
export function createExamQueryBody() { }
