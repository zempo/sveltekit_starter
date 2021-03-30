<script>
    import { HomeIcon } from 'svelte-mono-icons';
	import Footer from '$lib/static/Footer.svelte';
</script>
 
<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main class="pg home-pg">
	<h1>Welcome <HomeIcon size="1.5x" class="red" focusable="false" /> </h1>
</main>

<style lang="scss">
@import '../lib/sass/App.scss';
</style>
