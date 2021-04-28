<template>
  <div class="home">
    <div class="headerSection">
      <div
        v-if="allVideos"
        :class="previousPageDisabled? 'button disabled':'button'"
        v-on:click="previousPage"
      >
        {{ `To page: ${ page - 1 }` }}
      </div>
      <input v-model="word" @input="debouncedSearch" placeholder="Start typing for searching"/>
      <div
        v-if="allVideos"
        :class="nextPageDisabled? 'button disabled':'button'"
        v-on:click="nextPage"
      >
        {{ `To page: ${ page + 1 }` }}
      </div>
    </div>
    <div class="resultSection">
      <div v-if="loading">Loading...</div>
      <div v-else v-for="video in allVideos" :key="video.imdbID" class="card">
        <p>{{ video.Title }}</p>
        <img v-bind:src="video.Poster"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Action, Getter } from 'vuex-class';
import debounce from '@/utils/debounce';

export default class Home extends Vue {
  word = '';
  page = 1;
  @Action('search') getVideos: any;
  @Getter('getAllVideos') getAllVideos: any;
  @Getter('isLoading') isLoading: any;

  debouncedSearch = debounce(this.search, 400);

  get nextPageDisabled() {
    return this.page >= 10;
  }

  get previousPageDisabled() {
    return this.page <= 1;

  }

  get loading() {
    return this.isLoading;
  }

  get allVideos() {
    return this.getAllVideos?.length ? this.getAllVideos : null;
  }

  previousPage() {
    if (!this.previousPageDisabled) {
      this.page -= 1;
      this.getVideos({ search: this.word, page: this.page });
    }
  }

  nextPage() {
    if (!this.nextPageDisabled) {
      this.page += 1;
      this.getVideos({ search: this.word, page: this.page });
    }
  }

  search() {
    this.getVideos({ search: this.word, page: this.page });
  }
}
</script>

<style lang="scss" scoped>

input {
  width: 300px;
  height: 30px;
  text-align: center;
  font-size: 25px;
  padding: 10px;
}

.home {

  .headerSection {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    padding: 30px 0 30px 0;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;

    .button {
      padding: 10px;
      cursor: pointer;
      border: 1px solid black;
      border-radius: 10px;
      margin: 0 20px 0 20px;

      &.disabled {
        cursor: not-allowed;
      }
    }

  }

  .resultSection {
    padding-top: 120px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    .card {
      border: 1px solid black;
      border-radius: 10px;
      width: 400px;
      height: 600px;
      margin: 20px auto 20px;
    }
  }

}

</style>
