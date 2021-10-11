<template>
  <div class="conatiner--main">
    <div class="profile--image">
      <div class="card">
        <img class="profile--pic" :src="info.image ? info.image : userAvatar" />
        <p class="emial">{{ info.email }}</p>
      </div>
    </div>
    <h1 style="text-align: center">Welcome to dashboard! {{ info && info.name }}</h1>
    <div class="graph">
      <div id="barchart"></div>
    </div>
  </div>
</template>

<script>
import barGraph from "@/utils/echartGraph.js"
export default {
  name: "dashboard",
  data() {
    return {
      info: "",
      userAvatar: require("../../assets/images/user-avatar.png"),
    };
  },
  mounted() {
            barGraph()

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
#barchart{
  width: 100%;
  height: 500px;
}
.graph{
  width:100%;
  text-align: center;
}
</style>