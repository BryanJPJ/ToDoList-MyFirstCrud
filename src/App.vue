<script setup>
import create from "./JS/CRUD.js";
</script>

<template>
  <div class="d-flex">
    <div id="containerAdd">
      <h1>SIMPLE TODO LIST</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Please add whatever name</label>
          <input type="text" class="form-control" id="nameExample" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">Only text type characters</div>
        </div>

        <button type="button" class="btn btn-primary" @click="create()">ADD</button>
      </form>
    </div>
    <div id="containerList">
      <div>
        <h3>List of Names</h3>
        <div class="container overflow-auto" id="listOfNames">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h3 {
  color: white;
}

#containerList {
  color: black;
  margin: 0em 5em 0em 5em;
  width: 20em;
  height: 20em;
}

#listOfNames {
  width: 20em;
  color: wheat;
  height: 20em;
  background-color: rgb(110, 110, 181);
  border-radius: 20px;

}
#containerAdd{
  width: 20em;
  height: 20em;
}
</style>
