// Utilities
import { defineStore } from 'pinia'
import {reactive, ref} from "vue";

export const mainStore = defineStore('main', () => {
  const count = ref(0)
  const selectUser = ref({"name": "JH",
    "age":5
})


  return { count, selectUser }
})
