<template>
  <div class="home--main" @scroll="scrollFunc">
    <div class="btn1">
      <div style="text-align: right">
        <button class="fav--btn" @click="this.$router.push({ name: 'myfav' })">
          My Favourite
        </button>
      </div>
    </div>
    <div class="btn2">
      <div style="text-align: right">
        <button class="fav--btn" @click="this.$router.push({ name: 'myfav' })">
          My Favourite
        </button>
      </div>
    </div>
    <div v-if="errMsg">{{ errMsg }}</div>
    <div v-else>
      <div class="search--main">
        <input
          v-model="searchInput"
          class="search--input"
          type="text"
          placeholder="Enter content name"
        />
      </div>
      <h1>Season Listing</h1>
      <div class="container-main">
        <EpisodeDesc :episodeLists="searchFilter" @trigger-name="receiveEvent">
        </EpisodeDesc>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import EpisodeDesc from "./EpisodeDesc.vue";
import { ref, computed, provide } from "vue";
export default {
  components: { EpisodeDesc },
  name: "home",
  data() {
    return {
      errMsg: "",
    };
  },
  created() {
    console.log("errMsG", this.errMsg);
  },

  setup() {
    const searchInput = ref("");
    const searchFilter = computed(() => {
      let episodeList = store.getters["content/getContentList"];
      let finalData = episodeList.filter((ele) => {
        if (
          ele.name.toLowerCase().startsWith(searchInput.value.toLowerCase())
        ) {
          return true;
        }
      });
      return finalData;
    });
    provide("contentDataList", { name: "xzy" });
    // watch(searchInput,(value)=>{
    //   searchFilter(value)
    // })

    //list content
    const store = useStore();
    // const groupbySeason = computed(() => {
    //   let episodeList = store.getters["content/getContentList"];
    //   let list = {};
    //   episodeList.forEach((ele) => {
    //     if (Object.keys(list).includes(ele.season.toString())) {
    //       list[ele.season] = [...list[ele.season], ele];
    //     } else {
    //       list[ele.season] = [ele];
    //     }
    //   });
    //   return list;
    // });

    return { searchInput, searchFilter };
  },

  // computed: {
  //   ...mapGetters("content", ["getContentList"]),

  //   groupbySeason() {
  //     let episodeList = this.getContentList;
  //     let list = {};
  //     episodeList.forEach((ele) => {
  //       if (Object.keys(list).includes(ele.season.toString())) {
  //         list[ele.season] = [...list[ele.season], ele];
  //       } else {
  //         list[ele.season] = [ele];
  //       }
  //     });
  //     console.log({ list });
  //     return list;
  //   },
  // },

  methods: {
    mainFunc(name) {
      alert(name);
    },
    receiveEvent(name) {
      alert(name);
    },
    scrollFunc(event) {
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
.home--main {
  height: 80vh;
  overflow: auto;

  .btn1 {
    .fav--btn {
      @extend %btnProp;
      background: $btn-one;
    }
  }
  .btn2 {
    .fav--btn {
      @extend %btnProp;
      background: $btn-two;
      margin-top: 10px;
    }
  }

  .search--input {
    padding: 10px;
    width: 50%;
  }
  .search--main {
    margin: 20px;
  }
}

/* .home--main {
  height: 80vh;
  overflow: auto;
  .btn1 {
    .fav--btn {
      background: $button-color;
      @extend .btnProp;
    }
  }
  .btn2 {
    .fav--btn {
      background:$btn-two;
      @extend .btnProp;

      margin-top: 15px;
    }
  }
  .search--input {
    padding: 10px;
    width: 50%;
  }
  .search--main {
    margin: 20px;
  }
} */
</style>

