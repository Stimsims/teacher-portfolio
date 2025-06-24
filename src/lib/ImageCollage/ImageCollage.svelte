<!-- src/lib/Collage.svelte -->
<script>
  //import MyImage from './../../assets/images/L3 habitat game.jpeg?enhanced&widths=400;800&format=webp';
  import './ImageCollage.css'

  export let images = [];
</script>

<div class="collage">
  {#each images as image}
    <div class="collage-item">
        <enhanced:img src={image} alt="Student work" />
    </div>
  {/each}
</div>
