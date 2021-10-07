<template>
  <div class="modal--conatiner">
    <div class="modal--main">
      <p>Do you want to add the content to your favourite list</p>
      <div class="options">
        <button class="btn" @click="$emit('add-fav', true)">Yes</button
        ><button class="btn" @click="$emit('add-fav', false)">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  mounted() {
    console.log("modalData||", this.contentDataList);
  },
};
</script>

<style>
.modal--conatiner {
  position: fixed;
  top: 25%;
  left: 35%;
}
.modal--main {
  height: 100px;
  width: 100%;
  height: 100px;
  width: 100%;
  background: white;
  border: 1px solid black;
  font-weight: 900;
  padding: 32px;
}
.options {
  text-align: center;
}
.btn {
  border: 0;
  padding: 10px;
  margin: auto 15px;
  border-radius: 15px;
}
</style>