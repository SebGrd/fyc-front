<script>
    import { Tabs } from "attractions";

    export let currentPage = 'home';
</script>

<header>
    <a href="/">FYC Overflow</a>
    <Tabs name="router" items={["home", "search"]} bind:value={currentPage}/>
    <button href="/login">Login</button>
</header>