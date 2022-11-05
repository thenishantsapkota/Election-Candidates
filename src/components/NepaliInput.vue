<template>
  <input
    type="text"
    class="myInput"
    id="unique-input"
    v-on:keyup="search()"
    placeholder="Search for names.."
  />
</template>
<script setup>
import nepalify from "nepalify";
import { onMounted } from "vue";

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("unique-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
onMounted(() => {
  const options = {
    layout: "romanized",
    enable: true,
  };
  nepalify.interceptElementById("unique-input", options);
});
</script>
