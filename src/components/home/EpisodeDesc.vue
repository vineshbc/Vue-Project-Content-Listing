<template>
  <div class="container--episode">
    <div class="section" v-for="(episode, index) in contentList" :key="index">
      <div class="card">
        <div class="star--svg" @click="addToFavourite(episode)">
          <Star :added="checkAdded(episode)" />
        </div>
        <div class="content--info" @click="getContent(episode)">
          <img :src="episodeImage(episode)" alt="images" style="width: 100%" />
          <p class="info" style="font-weight: 700">
            Episode {{ episode.number }}
          </p>
          <p class="info" style="font-weight: 500">{{ episode.name }}</p>
          <div class="desc info" v-html="episode.summary"></div>
        </div>
      </div>
    </div>
    <button class="sample-button"> Button </button>
    <teleport to="body">
    <Modal v-if="showModal" @add-fav="checkAddFav" />
    </teleport>
  </div>
</template>

<script>
import { computed, toRef,inject } from "vue";
import { mapGetters, mapMutations } from "vuex";
import Star from "../../svg/Star.vue";
import { useRouter } from "vue-router";
import Modal from "../common/Modal.vue";
import Teleport from '../teleport/teleport.vue';

export default {
  components: { Star, Modal, Teleport },
  data() {
    return {
      showModal: false,
      episodeDetail: "",
    };
  },
  setup(props) {
    let propsData = {
      name: "xyz",
      age: "30",
      adress: "xxx",
    };

    const data = inject('contentDataList')
    console.log("listdata||",data)
    const router = useRouter();

    const name = toRef(propsData, "name");
    console.log("name||", name);
    const contentList = computed(() => {
      return props.episodeLists;
    });
    console.log("episode List||", contentList);

    const getContent = (episode) => {
      console.log("episode||", episode);
      router.push({
        name: "detailpage",
        params: { id: episode.id },
      });
    };

    return { contentList, getContent };
  },
  props: {
    episodeLists: {
      type: Object,
      default: null,
    },
  },
 
  computed: {
    ...mapGetters("content", ["getFavList"]),
  },
  methods: {
    ...mapMutations("content", ["setFavList"]),
    episodeImage(episode) {
      return episode && episode.image && episode.image.medium;
    },

    addToFavourite(episode) {
      this.showModal = true;
      this.episodeDetail = episode;
    },
    checkAdded(currEpisode) {
      let status = this.getFavList.some((ele) => ele.id === currEpisode.id);
      return status;
    },
    checkAddFav(value) {
      console.log("value||", value);
      if (value) {
        let finalArr = [];
        if (this.checkAdded(this.episodeDetail)) {
          finalArr = this.getFavList.filter((ele) => {
            if (ele.id != this.episodeDetail.id) {
              return ele;
            }
          });
        } else {
          finalArr = [...this.getFavList, this.episodeDetail];
        }

        this.setFavList(finalArr);
        this.showModal = false
      }
      else{
        this.showModal = false
      }
    },
  },
};
</script>

<style>
.container--episode {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.section {
  margin-bottom: 40px;
}
.card {
  height: 275px;
  width: 275px;
  border: 2px solid black;
  text-align: center;
}
.info {
  margin: 2px;
  font-size: 14px;
}
p {
  margin: 0px;
}
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
}
.star--svg {
  text-align: end;
}
</style>