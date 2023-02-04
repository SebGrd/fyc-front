<script>
    import { Button, Tabs } from "attractions";

    export let currentPage = 'home';
</script>

<header>
    <a href="/">FYC Overflow</a>
    <Tabs name="router" items={["home", "search"]} bind:value={currentPage}/>
    <Button href="/login">Login</Button>
</header>