<template>
  <div class="fav--list">
    <button class="btn" @click="this.$router.back()">back</button>

    <h1>Favourites</h1>
    <div class="list--items">
      <div
        class="content--info"
        v-for="(episode, index) in favourite"
        :key="index"
      >
        <img :src="episodeImage(episode)" alt="images" style="width: 100%" />
        <p class="info" style="font-weight: 700">
          Episode {{ episode.number }}
        </p>
        <p class="info" style="font-weight: 500">{{ episode.name }}</p>
        <div class="desc info" v-html="episode.summary"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Favourite",
  computed: {
    ...mapGetters('content',['getFavList']),
    favourite() {
      return this.getFavList
    },
  },
  methods: {
    episodeImage(episode) {
      return episode && episode.image && episode.image.medium;
    },
  },
};
</script>

<style>
@import '../../style/style.css';
.list--items {
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
.content--info {
  margin: 20px;
}
</style>