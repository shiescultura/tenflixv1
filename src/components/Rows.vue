<template>
  <div>
    <div v-for="(movie) in movies" :key="movie.id.label">
      <div class="" :style="{ 'background-image': 'url(' + movie['im:image'][2]['label'] + ')' }" style="width:500px;height:500px;border-radius:30px;">
        <img :src="movie['im:image'][2]['label']" :alt="movie.title.label" style="height:200px;">
        <h1 style="color:white;">
          {{movie.title.label}}
        </h1>
      </div>
      <!-- <div>
        {{movie.title.label}}
        {{movie['im:price']['label']}}
        <br>
        <img :src="movie['im:image'][2]['label']" :alt="movie.title.label" style="height:170px;">
      </div> -->

      <br>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('movies/loadMovies');
    console.log('created');
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies
    }
  }
}
</script>