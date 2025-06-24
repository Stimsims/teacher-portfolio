<!-- src/lib/Collage.svelte -->
<script>
  import MyImage from './../../assets/images/L3 habitat game.jpeg?enhanced&widths=400;800&format=webp';
  import './ImageCollage.css'
</script>

<div class="collage">
  <div class="collage-item">
    <enhanced:img src={MyImage} alt="Student work"  sizes="(max-width: 600px) 100vw, 500px" />
  </div>
</div>
