<template>
  <div class="tab--main">
    <button @click="this.$router.push({name:'home'})">nav to Home</button>
    <h1 style="cursor: pointer" @click="updateContent">{{ headerData }}</h1>
    <div class="tab--list">
      <span
        v-for="(tab, index) in tabArr"
        :key="index"
        class="tabs"
        @click="tabActive(tab)"
        :class="activeClass === tab.id ? 'active' : ''"
        >{{ tab.name }}
      </span>
    </div>
    <div class="content">
      <!-- <component :is="activeComp" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.esm.min.js";
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';

export default {
  components: { Tab1, Tab2, Tab3 },
  name: "tabmain",
  data() {
    return {
      activeClass: 1,
      tabArr: [
        {
          id: 1,
          name: "Tab 1",
          tab: Tab1,
          routeName: "tab1",
        },
        {
          id: 2,
          name: "Tab 2",
          tab: Tab2,
          routeName: "tab2",
        },
        {
          id: 3,
          name: "Tab 3",
          tab: Tab3,
          routeName: "tab3",
        },
      ],
      activeComp: Tab1,
    };
  },
  setup() {
    onMounted(()=>{console.log("component Mounted")})
    onUpdated(()=>{console.log("component updated")})
    onUnmounted(()=>{console.log("component Destroyed")})
  },

  computed: {
    headerData() {
      return this.$store.getters.getInfo;
    },
  },
  created() {
    console.log("State||", this.$store);
    let tabInfo = this.tabArr.filter((ele) => {
      if (ele.routeName === this.$route.name) {
        return ele;
      }
    });
    this.activeClass = tabInfo && tabInfo[0] && tabInfo[0].id;
  },
  methods: {
    tabActive(tabData) {
      this.activeClass = tabData.id;
      this.activeComp = tabData.tab;
      this.$router.push({ name: tabData.routeName });
    },
    updateContent() {
      this.$store.commit("setInfo", "Welcome to vue session!");
    },
  },
};
</script>

<style scoped>
.tab--main {
  text-align: center;
}
.tabs {
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid green;
  color: green;
}
.content {
  margin-top: 100px;
  margin: 0px 35%;
}
.tab--list {
  position: sticky;
  width: 100%;
  display: block;
  z-index: 99;
  top: 0px;
  background: white;
  padding: 32px 0px;
}
</style>