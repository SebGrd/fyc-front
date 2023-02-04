<script>
  import AppHeader from "./components/layout/AppHeader.svelte";
  import Router from "./router/Router.svelte";

  let currentPage;
</script>

<main>
  <AppHeader bind:currentPage />
  <Router/>
  <button filled on:click={() => window.location.replace('/search')}>click me</button>
</main>
