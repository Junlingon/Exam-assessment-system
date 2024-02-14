import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', () => {
  const is_hover = ref(window.innerWidth < 776)

  function change_is_hover(flag: boolean) {
    is_hover.value = flag;
  }

  return {
    is_hover,
    change_is_hover
  }
})