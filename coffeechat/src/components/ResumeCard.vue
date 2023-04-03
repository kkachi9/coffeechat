<template>
  <div class="d-flex align-center flex-column">
    <v-card
      width="400"
      :title="selectUser['userName']"
      :subtitle="selectUser['userNickname']"
      :text="selectUser['userResume']"
    ></v-card>
    {{selectUser["userId"]}}
  </div>
</template>

<script setup>
import {mainStore} from "@/store/app";
import {storeToRefs} from "pinia";

const store = mainStore()
const {selectUser} = storeToRefs(store)

console.log("1111"+selectUser)




</script>

<style scoped>

</style>
