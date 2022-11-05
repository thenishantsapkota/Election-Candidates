<script setup>
import { reactive } from "vue";
import Select from "./Select.vue";

const state = reactive({
  value: null,
  searchType: null,
  renderComponent: true,
});

function searchTypeHandler() {
  const getSelectedIndex = (el) => {
    if (el.selectedIndex === -1) {
      return null;
    }
    return el.selectedIndex;
  };

  const select = document.querySelector("select");
  state.value = getSelectedIndex(select);
  state.searchType = select.options[state.value].text;
}

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("unique-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  searchTypeHandler();
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[state.value];
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
</script>

<template>
  <div class="wrap">
    <Select class="mySelect" v-on:change="searchTypeHandler" />
    <span>
      <input
      type="text"
      class="myInput"
      id="unique-input"
      v-on:keyup="search()"
      v-bind:placeholder="`Search by ${state.searchType ?? 'Name'}`"
      v-if="state.renderComponent"
    />
    </span>
  </div>
</template>
