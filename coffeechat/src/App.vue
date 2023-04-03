<!--
3.31
  1. 지도 불러오기
  2. 이력서 카드 하단 넣기



해야 할 일
  1. 유저 클릭시 해당 위치에 정보 뜨게하기
  2. 일정 거리 안에 유저만 뜨게하기
  2-1. 좌표계산
  3. 간단 이력서 page
  4. myPage
-->

<template>
  <v-app>

    <TopBar/>
    <v-main>

      <router-view/>

    </v-main>

    <v-footer>

      <BotBar/>

    </v-footer>

  </v-app>
</template>

<script lang="ts" setup>
  import TopBar from "@/components/TopBar.vue";
  import BotBar from "@/components/BotBar.vue";
</script>
