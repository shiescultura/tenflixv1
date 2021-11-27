<template>
  <div class="home">
    <Header/>
    <Rows/>
    <div v-for="(movie) in movies" :key="movie.id.label">
      <div>
        {{movie.title.label}}
        {{movie['im:price']['label']}}
        <!-- {{movie.im:rentalPrice.label}} -->
        <!-- <pre>
          {{movie['im:price']['label']}}
        </pre> -->
        <!-- {{movie['im:rentalPrice']['label']}} -->
      </div>
        
    </div>
    <!-- <pre>
      {{movies}}
    </pre> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Rows from '../components/Rows.vue'
export default {
  components: {
    Header,
    Rows
  },
  name: "Home",
  created() {
    this.$store.dispatch('movies/loadMovies');
    console.log('created');
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies
    }
  }
};
</script>
