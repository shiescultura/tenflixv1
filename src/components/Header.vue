<template>
  <header class="header">
    <div class="overlay has-fade"></div>

    <nav class="container container--pall flex flex-jc-sb flex-ai-c">
      <a class="header__logo" href="/">
        <img src="../assets/netflix.svg" alt="Tenflix">
      </a>
      <a id="btnHamburger" class="header__toggle hide-for-desktop" href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div class="header__links hide-for-mobile">
        <a href="#">Home</a>
        <a href="#">Watch Again</a>
        <a href="#">TV Shows</a>
        <a href="#">Mopvies</a>
        <a href="#">My List</a>
      </div>
      <!-- <a href="#" class="button header__cta hide-for-mobile" type="button">Request Invite</a> -->
    </nav>
    <div class="header__menu has-fade">
        <a href="#">Home</a>
        <a href="#">Watch Again</a>
        <a href="#">TV Shows</a>
        <a href="#">Mopvies</a>
        <a href="#">My List</a>
    </div>
  </header>
</template>
