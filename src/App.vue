<template>
  <div class="container">
    <div v-if="loading" class="loader--container">
      <div class="loader">
        <img src="@/assets/images/loader.gif" style="width: 30%" />
      </div>
    </div>
    <div v-else class="main">
      <router-view></router-view>
      <!-- <Home/> -->
    </div>
  </div>
</template>

<script>
// import Home from './components/home/Home.vue';
// import TabMain from './components/tab/TabMain.vue';
import { mapActions,mapMutations,mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      checkedData: [],
    };
  },
  components: {
    // Home,
    // TabMain
  },
  computed: {
    ...mapGetters(['getLoading']),
    loading() {
      return this.getLoading;
    },
  },
  created() {
    let userData = localStorage.getItem("userData");
    if (!userData) {
      this.$router.push({ name: "login" });
    }

    this.actInfo()
      .then((res) => {
        this.setContentList(res._embedded.episodes)
      })
      .catch((err) => {
        this.errMsg = err;
      });
  },
  methods: {
    // ...mapActions('content',['actInfo']),
    ...mapActions('content',['actInfo','testApi','axiosApi']),
    ...mapMutations('content',['setContentList'])
  },

  // watch:{
  //   $route(to,from){
  //     console.log("to route",to)
  //     console.log("form route",from)
  //   }
  // }
};
</script>

<style lang="scss" scoped>


* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader--container {
  background: rgb(128, 128, 128, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
}
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
.main {
  margin: 20px;
}
</style>
