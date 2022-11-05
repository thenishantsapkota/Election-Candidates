<script>
import axios from "axios";

export default {
  name: "Candidates",
  data() {
    return {
      candidates: null,
    };
  },
  created: function () {
    axios.get("https://server-three-xi.vercel.app/api").then((res) => {
      this.candidates = res.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <h3>Election Candidates:</h3>
    <!-- <input
      type="text"
      id="searchbar"
      onkeyup="search_animal()"
      placeholder="Search for names.."
    /> -->
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
        <tr v-for="candidate in candidates">
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
  margin-bottom: 5%;
}
</style>
