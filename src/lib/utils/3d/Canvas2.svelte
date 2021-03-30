<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scenes/scene2";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style lang="scss">
@import '../../sass/App.scss';
</style>
