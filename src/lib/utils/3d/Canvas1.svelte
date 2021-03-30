<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scenes/scene1";
  let el;

  onMount(() => {
    console.log(window.innerHeight, window.innerWidth)
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style lang="scss">
@import '../../sass/App.scss';
</style>
