<template>
  <div class="conatiner--main">
    <div class="profile--image">
      <div class="card">
        <img class="profile--pic" :src="info.image ? info.image : userAvatar" />
        <p class="emial">{{ info.email }}</p>
      </div>
    </div>
    <h1 style="text-align: center">Welcome to dashboard! {{ info && info.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      info: "",
      userAvatar: require("../../assets/images/user-avatar.png"),
    };
  },
  mounted() {
    this.info = JSON.parse(localStorage.getItem("userDetails"));
    console.log(this.info);
  },
};
</script>

<style scoped>
.profile--image {
  text-align: right;
}
.profile--pic {
  border-radius: 50%;
  width: 45px;
}
.card {
  margin-left: 88%;
  text-align: center;
}
</style>