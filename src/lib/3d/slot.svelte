<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scenes/scene";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style lang="scss">
@import '../global/sass/App.scss';
</style>
