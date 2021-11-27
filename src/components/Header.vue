<template>
  <header class="header">
    <div class="overlay has-fade"></div>

    <nav class="container container--pall flex flex-jc-sb flex-ai-c">
      <a class="header__logo" href="/">
        <img src="images/logo.svg" alt="Easybank">
      </a>
      <a id="btnHamburger" class="header__toggle hide-for-desktop" href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <div class="header__links hide-for-mobile">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
      <a href="#" class="button header__cta hide-for-mobile" type="button">Request Invite</a>
    </nav>
    <div class="header__menu has-fade">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
      <a href="#">Careers</a>
    </div>
  </header>
</template>