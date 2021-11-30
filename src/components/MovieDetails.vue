<template>
  <div class="MovieDetails">
    <div class="MovieDetails__fade--top" />
    <div class="MovieDetails__wrapper">
      <h1 class="MovieDetails__title">
        Money Heist
      </h1>
      <div class="MovieDetails__details">
        <p class="MovieDetails__description">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p class="MovieDetails__description">
          Genres: <span class="MovieDetails__description--white">Action</span>
        </p>
        <!-- <button v-if="!isMovieInMyList" type="button" class="btn MovieDetails__btn" @click="addMovieToMyList">
          <font-awesome-icon :icon="['fas', 'plus']" class="MovieDetails__btn-icon" fixed-width /> My List
        </button>
        <button v-else type="button" class="btn MovieDetails__btn" @click="removeMovieFromMyList">
           <font-awesome-icon :icon="['fas', 'minus']" class="MovieDetails__btn-icon" fixed-width /> My List
        </button> -->
      </div>
    </div>
    <div class="MovieDetails__fade--bottom" />
  </div>
</template>
