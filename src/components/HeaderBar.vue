<template>
  <header class="header">
    <nav class="header__navigation">
      <a href="#"
        ><img class="header__logo" src="@/resources/logo.png" alt="logo"
      /></a>
      <ul class="header__links">
        <li class="header__link">
          <a href="#" class="header__linktext">Home</a>
        </li>
        <li class="header__link">
          <a href="#" class="header__linktext">My List</a>
        </li>
        <li class="header__link">
          <a href="#" class="header__linktext">
            <img
              src="@/resources/Icons/search-icon.svg"
              class="header__search-link"
            />
          </a>
        </li>
      </ul>
    </nav>
    <div class="header__options">
      <img
        class="header__viewmode-switch"
        src="@/resources/Icons/anime-icon.svg"
      />
      <label class="header__dark-mode-wrap header__dark-mode-wrap--night">
        <input type="checkbox" />
        <div class="header__dark-mode-switch header__dark-mode-switch--night">
          <img src="@/resources/Icons/night-mode-96.png" />
          <!-- <img src="@/resources/Icons/icons8-sun-512.png" /> -->
        </div>
      </label>
      <div class="header__account">
        <img
          class="header__account-icon"
          src="@/resources/placeholder-pfp.png"
          alt="profile icon"
        />
        <div class="header__account-dropdown">
          <a href="#" class="header__account-link">Account</a>
          <a href="#" class="header__account-link">Sign Out</a>
          <a class="header__account-link header__account-name">Maki Roll</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  background-color: $main-bg;
  line-height: 2em;
  height: 4rem;

  &__logo {
    height: 1.5rem;
  }

  &__navigation {
    display: flex;
  }

  &__links {
    list-style: none;
    display: flex;
  }

  &__link {
    margin-left: 1rem;
  }

  &__linktext {
    text-decoration: none;
    color: $font-color;
    font-weight: bold;
  }

  &__search-link {
    height: 2.5rem;
    margin-top: -0.5rem;
  }

  &__options {
    display: flex;
  }

  &__viewmode-switch {
    height: 3rem;
    margin: -0.5rem 1rem 0 0;
    border-right: 2px solid $border-color;
    padding-right: 1rem;
  }

  &__viewmode-switch:hover {
    cursor: pointer;
  }

  &__dark-mode-wrap {
    width: 6rem;
    height: 2.65rem;
    margin-right: 2rem;
    margin-top: -0.15rem;
    position: relative;
    border-radius: 2.5rem;
  }

  &__dark-mode-wrap:hover {
    cursor: pointer;
  }

  &__dark-mode-wrap--night {
    background: linear-gradient(
      90deg,
      rgb(11, 6, 94) 0%,
      rgba(70, 10, 138, 1) 60%
    );
    border: 1px solid rgb(219, 219, 219);
  }

  &__dark-mode-wrap--day {
    background: linear-gradient(
      90deg,
      rgba(255, 214, 32, 1) 40%,
      rgba(231, 187, 116, 1) 100%
    );
    border: 1px solid rgb(46, 46, 46);
  }

  &__dark-mode-wrap input {
    opacity: 0;
  }

  &__dark-mode-switch {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 0rem;
    border-radius: 50%;
  }

  &__dark-mode-switch--night {
    right: 0.15rem;
    background-color: rgb(13, 4, 51);
  }

  &__dark-mode-switch--day {
    left: 0.15rem;
    background-color: rgb(246, 250, 194);
  }

  &__dark-mode-switch img {
    width: 2.5rem;
  }

  &__account {
    width: 4rem;
    height: 2.5rem;
  }

  &__account:hover {
    cursor: pointer;
  }

  &__account::after {
    content: "▼";
    position: relative;
    left: 0.5rem;
    bottom: 0.75rem;
    font-size: 0.75rem;
  }

  &__account-icon {
    position: relative;
    height: 2.25rem;
  }

  &__account-dropdown {
    display: none;
    position: absolute;
    right: 0rem;
    margin-top: -0.5rem;
    padding: 1rem 0 0.5rem 0;
    background-color: $main-bg;
    max-width: 10rem;
    z-index: 1;
  }

  &__account-link,&__account-name{
    padding:0 2rem;
  }

  &__account-link{
    display: block;
    color:white;
    text-decoration: none;
  }

  &__account-link:hover{
    text-decoration: underline;
  }

  &__account-name{
    border-top:2px solid white;
    font-style: italic;
    margin-top:0.5rem;
    color:rgb(197, 197, 197)
  }

  &__account:hover &__account-dropdown{
    display: block;
  }
  &__account-dropdown:hover{
    display: block;
  }

}
</style>