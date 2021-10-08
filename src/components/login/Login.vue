<template>
  <div class="login--main">
    <div class="email--main">
      <p>Email:</p>
      <input v-model="email" type="email" placeholder="Enter your email id" />
      <p class="errMsg" v-if="emailErrMsg">Enter Valid Email</p>
    </div>
    <div class="passwd--main">
      <p>Password:</p>
      <input v-model="password" type="password" />
      <p class="errMsg" v-if="passwordErrMsg">
        Password length should be between 8 to 16 characters
      </p>
    </div>
    <button class="login--btn" @click="loginFunc">Login</button>
    <div class="google--icon">
      <Google />
    </div>
  </div>
</template>

<script>
import Mixins from "@/mixins";
import Google from "../socialMediaLogin/Google.vue";
export default {
  components: { Google },
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      emailErrMsg: true,
      passwordErrMsg: true,
    };
  },
  watch: {
    email(value) {
      this.emailErrMsg = this.emailValidation(value);
    },
    password(value) {
      if (value.length >= 8 && value.length <= 16) {
        this.passwordErrMsg = false;
      } else {
        this.passwordErrMsg = true;
      }
    },
  },

  methods: {
    loginFunc() {
      console.log("login");
      if (!this.passwordErrMsg && !this.emailErrMsg) {
        localStorage.setItem("userData", this.email);
        localStorage.setItem("userDetails", JSON.stringify({email:this.email}));

        this.$router.push({ name: "dashboard" });
      } else {
        alert("login failed");
      }
    },
    initFunction() {
      console.log("Login method");
    },
  },
  mixins: [Mixins],
};
</script>

<style scoped>
.login--main {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  padding: 50px;
  margin: auto 30%;
  transform: translateY(20%);
  height: 60vh;
}
p {
  padding: 10px;
  font-weight: 700;
}
input {
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  margin-bottom: 10px;
}
.login--btn {
  border: 0px;
  margin-top: 20px;
  padding: 10px;
  background: lightskyblue;
  border-radius: 10px;
  width: 50%;
}
.errMsg {
  color: red;
  font-size: 10px;
}
.google--icon {
  margin-top: 10px;
}
</style>