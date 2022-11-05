<script setup>
import axios from "axios";
import { reactive, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import NepaliInput from "./NepaliInput.vue";

const state = reactive({
  candidates: null,
  isLoading: true,
  timer: null,
});

async function apiRequest() {
  await axios.get("https://server-three-xi.vercel.app/api").then((res) => {
    state.candidates = res.data;
  });
}

onBeforeMount(async () => {
  await axios.get("https://server-three-xi.vercel.app/api").then((res) => {
    state.candidates = res.data;
    state.isLoading = false;
  });
});

onMounted(() => {
  state.timer = setInterval(async () => {
    await apiRequest();
  }, 100000);
});

onBeforeUnmount(() => {
  clearInterval(state.timer);
});
</script>

<template>
  <div class="preloader" v-if="state.isLoading">
    <img src="../assets/loader.svg" alt="" />
  </div>
  <div class="container" v-if="!state.isLoading">
    <h3>Election Candidates:</h3>
    <p>
      Developed with ❤️ by <a href="https://snishant.com.np">Nishant Sapkota</a>
    </p>
    <NepaliInput />

    <table id="myTable">
      <thead>
        <tr class="header">
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Symbol</th>
          <th scope="col">Political Party</th>
          <th scope="col">District</th>
          <th scope="col">State</th>
          <th scope="col">Votes Received</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="candidate in state.candidates">
          <td>{{ candidate.CandidateName }}</td>
          <td>{{ candidate.Age }}</td>
          <td>{{ candidate.Gender }}</td>
          <td>{{ candidate.SymbolName }}</td>
          <td>{{ candidate.PoliticalPartyName }}</td>
          <td>{{ candidate.DistrictName }}</td>
          <td>{{ candidate.StateName }}</td>
          <td>{{ candidate.TotalVoteReceived }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
h3 {
  margin-bottom: 2%;
}
</style>
