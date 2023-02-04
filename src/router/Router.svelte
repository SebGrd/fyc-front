<script>
    import router from "@/router/router.js";
    let route;
    $: ( route = router.getRouteFromPath(window.location.pathname) )
</script>

<svelte:component this={route?.component}/>