import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const is_show_solution_tab = ref(false)
  const is_show_solution_enter = ref(false)

  function change_show_solution_tab(flag: boolean) {
    is_show_solution_tab.value = flag
  }

  const show_solution_tab_index = ref(0)

  function change_solution_tab_index(index: number) {
    show_solution_tab_index.value = index
  }
  return {
    is_show_solution_enter,
    is_show_solution_tab,
    change_show_solution_tab,
    show_solution_tab_index,
    change_solution_tab_index
  }
})
