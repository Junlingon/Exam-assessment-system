import { ref } from 'vue'
import { defineStore } from 'pinia'
// import { useCommonStore } from './common'
// const commonStore = useCommonStore()

export const xxx = defineStore('searchKey', () => {
  let historySearch = ref([''])
  let searchResult = ref(['1111'])
  let showSearchResult = ref(false);
  let search_input = ref('')

  function push_historySearch(value: string) {

    historySearch.value.push(value)
    const history_search = JSON.stringify(historySearch.value)
    localStorage.setItem('history_search', history_search)
  }
  function set_searchResult(data: string[]) {
    searchResult.value = data;
    console.log('searchResult-----', searchResult.value)
  }
  function set_showSearchResult(flag: boolean) {
    showSearchResult.value = flag
  }

  function set_historySearch(arr: string[]) {
    historySearch.value = arr
  }

  function set_search_input(str: string) {
    search_input.value = str
  }

  return {
    historySearch,
    showSearchResult,
    searchResult,
    search_input,
    push_historySearch,
    set_historySearch,
    set_searchResult,
    set_showSearchResult,
    set_search_input
  }
})
