<script>
  import { slide, fade } from 'svelte/transition';
  import './Header.css'
  export let img = '';
  export let alt = '';
</script>


<div {...$$restProps} class="side-by-side" >
  <!-- Text Section -->
  <div class="pico-text">
    <slot />
  </div>

  <!-- Image Section -->
  <div >
    <enhanced:img src={img} alt={alt} class="home-hero" />
  </div>
</div>