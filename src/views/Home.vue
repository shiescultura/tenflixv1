<template>
  <div class="home">
    <!-- <HeaderNav/> -->
    <!-- <Header/> -->
    <MovieDetails/>
    <Row2/>
  </div>
</template>

<script>
// import Header from '../components/Header.vue'
import MovieDetails from '../components/MovieDetails.vue'
// import Rows from '../components/Rows.vue'
// import Rows1 from '../components/Rows1.vue'
import Row2 from '../components/Row2.vue'
export default {
  components: {
    // Header,
    MovieDetails,
    // Rows,
    // Rows1,
    Row2
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
