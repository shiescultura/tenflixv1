<template>
  <div class="home">
    <Header/>
    <!-- <Rows/> -->
    <!-- <Rows1/> -->
    <Row2/>
    <!-- <div v-for="(movie) in movies" :key="movie.id.label">
      <div>
        {{movie.title.label}}
        {{movie['im:price']['label']}}
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Rows from '../components/Rows.vue'
// import Rows1 from '../components/Rows1.vue'
import Row2 from '../components/Row2.vue'
export default {
  components: {
    Header,
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
