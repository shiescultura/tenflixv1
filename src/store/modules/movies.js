// import Vue from 'vue';
import axios from 'axios';

export default {
    namespaced: true,
    state: {
      loading: false,
      movies: [],
      alldata: 'alldatawillbedisplayed'
    },
    mutations: {
      set_isLoading(state, loading) {
        state.loading = loading
      },
      setMovies(state, payload) {
        state.movies = payload;
      },
    },
    actions: {
      async loadMovies ({commit}) {
        try {
          const response = await axios.get('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
          commit('setMovies', response.data.feed.entry)
          console.log('load movies', response)
        }
        catch (error) {
          console.log(error);
        }
      },
    },
    getters: {
      allmovies: state => {
        return state.movies;
      },
      alldata: state => {
        return state.alldata
      }
    }
  };
  