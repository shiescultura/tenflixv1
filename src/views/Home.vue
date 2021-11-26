<template>
  <div class="home">
    <pre>
      {{movies}}
    </pre>
  </div>
</template>

<script>

export default {
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
