<template>
  <div class="container--main">
    <button class="google--btn" id="google--login">
      <div style="display: flex">
        <span><img id="google--img" :src="googleIcon" /></span>
        <span id="title">Google</span>
      </div>
    </button>
  </div>
</template>

<script>
import GoogleLogin from "@/utils/googleLogin.js";
import emitter from "@/main.js";
export default {
  data() {
    return {
      googleIcon: require("../../assets/images/google-icon.png"),
    };
  },
  mounted() {
    emitter.on("google--login", this.googleUserInfo);
    const googleUser = new GoogleLogin();
    googleUser.initLogin();
  },
  methods: {
    googleUserInfo(info) {
      localStorage.setItem("userData", info.email);
      localStorage.setItem("userDetails", JSON.stringify(info));
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style scoped>
.google--btn {
  padding: 7px 16px;
}
#google--img {
  width: 18px;
}
#title {
  font-size: 18px;
  margin-left: 20px;
}
</style>