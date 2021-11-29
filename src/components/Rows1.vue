<template>
<div>
  <section class="movierow">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(movie) in movies" :key="movie.id.label">
            <div @click="view(movie)">
              <img :src="movie['im:image'][2]['label']" />
              {{movie.title.label}}
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  </section>
  <!-- <section class="movierow">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(movie) in movies" :key="movie.id.label">
            <div @click="view(movie)">
              <img :src="movie['im:image'][2]['label']" />
              {{movie.title.label}}
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  </section> -->
</div>

</template>
<style>
@import 'https://unpkg.com/swiper/swiper-bundle.min.css';
</style>
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<script>
  // import Swiper JS
  import Swiper from 'swiper';

  export default {
    data () {
      return {
        
      }
    },
    mounted () {
      const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
      console.log('swiper', swiper)
    },
    created() {
      this.$store.dispatch('movies/loadMovies');
      console.log('created');
    },
    methods: {
      view(movie) {
        console.log('movie', movie)
      }
    },
    computed: {
      movies() {
        return this.$store.state.movies.movies
      }
    }
  }
</script>
