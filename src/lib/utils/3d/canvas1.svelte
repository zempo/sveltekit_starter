<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scenes/scene1";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style lang="scss">
@import '$lib/sass/App.scss';
</style>
