<template>

  <v-container>

    <naver-map style="width: 100%; height: 400px" :mapOptions="myPosition">
      <!--      내 위치 표시 및 반경 표시-->
      <naver-marker
        @click="isOpen = !isOpen"
        :latitude=myPosition.latitude
        :longitude=myPosition.longitude

      />
      <naver-circle
        :latitude=myPosition.latitude
        :longitude=myPosition.longitude
        :radius="10"

      />
      <!--주위 사람 찍기-->
      <div v-for="(user, idx)
        in state.users"
           :key="idx"
      >
        <naver-marker
          @click="userClick(user.userId)"
          :latitude=user.userLatitude
          :longitude=user.userLongitude

        ></naver-marker>

      </div>

      <naver-circle
        :latitude=myPosition.latitude
        :longitude=myPosition.longitude
        :radius="10"

      />
    </naver-map>
  </v-container>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {reactive, ref} from "vue";
import {NaverMap, NaverMarker, NaverInfoWindow, NaverCircle} from "vue3-naver-maps";
import axios from "axios";
import {mainStore} from "@/store/app";

const store = mainStore()

const {selectUser} = storeToRefs(store)



const state = reactive({
  users: [],
  // selectUser:{}
})

const marker = ref();
const infoWindow = ref();
const isOpen = ref(true); // false: 안보임, true: 보임
const userClick = (id) => {

  store.selectUser = state.users[id-1]
  isOpen.value = !isOpen.value
  console.log('유저는')
  console.log(store.selectUser)
  console.log('마커는' + id)
};
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
};


//내 위치 정보
const myPosition = reactive({
  latitude: 0, // 지도 중앙 위도
  longitude: 0, // 지도 중앙 경도
  zoom: 19,
  zoomControl: false,
  zoomControlOptions: {position: "TOP_RIGHT"},
});

//포지션 성공시
function onGeoOkay(position) {
  console.log(position);
  myPosition.latitude = position['coords']['latitude'];
  myPosition.longitude = position['coords']['longitude'];
}

//포지션 실패시
function onGeoError() {
  alert("I can't find you. No weather for you.");
}

//내 위치 찍기
navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError)



//리스트 불러오기
axios.get('/api/test').then(({data}) => {
//json array
  state.users = data
  for (let user of data) {

    console.log(user.isOpen = false)
    console.log(1)
  }
  console.log(data)
})



</script>

<style scoped>

</style>
