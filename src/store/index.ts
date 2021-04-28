import { createStore } from 'vuex';
import request from '../utils/requests';
import {
  IMovieSearchResponse,
  SearchProps,
  StateStructure,
} from '@/store/types';

const secretKey = '';

const state: StateStructure = {
  videos: [],
  isLoading: false,
  resultLength: 0,
  totalResults: 0,
  page: 1,
  message: '',
};

export default createStore({
  state,
  getters: {
    getAllVideos(state) {
      return state.videos;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    setLoading(state, value: false) {
      state.isLoading = value;
    },
    setVideos(state, value) {
      state.videos = value.Search;
      state.resultLength = value.Search?.length;
      state.totalResults = value.totalResults;
      state.message = '';
    },
    setSearchError(state, value) {
      state.videos = [];
      state.resultLength = 0;
      state.totalResults = 0;
      state.message = value.Error;
    }
  },
  actions: {
    async search(context, { search, page = 1 }: SearchProps) {
      try {
        context.commit('setLoading', true);
        const resultVideos = <IMovieSearchResponse>await request.get('http://www.omdbapi.com', {
          apikey: secretKey,
          s: search,
          page,
        });
        if (resultVideos.Error) {
          context.commit('setSearchError', resultVideos);
        } else {
          context.commit('setVideos', resultVideos);
        }
        context.commit('setLoading', false);
      } catch (error) {
        console.log(error);
        context.commit('setLoading', false);
      }
    }
  },
});
