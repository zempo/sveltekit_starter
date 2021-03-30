<script>
	export let status;
	export let error;
</script>

<main>
<h1>{status}</h1>
<p>{error.message}</p>
</main>

<style lang="scss">
@import '../lib/sass/App.scss';
</style>