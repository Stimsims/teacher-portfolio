<script>
  import { slide, fade } from 'svelte/transition';

  // Image source (the imported ?enhanced image)
  export let img = '';
  export let alt = '';

</script>

<style>
    .responsive-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    }

    @media (min-width: 769px) {
    .responsive-row {
        flex-direction: row;
        align-items: flex-start;
    }
    }

    /* Variant: equal-width children in the row
    - on mobile (<=768px) items stack vertically
    - on wider screens items become a row and each direct child gets `flex:1` so they share space equally
    */
.responsive-row-equal {
  position: relative;
  display: flex;
  flex-direction: column;   /* stack on mobile */
  gap: 1rem;
  align-items: stretch;      /* normal behaviour */
}

/* Desktop / wide screens */
@media (min-width: 769px) {
  .responsive-row-equal {
    flex-direction: row;     /* side-by-side */
    align-items: flex-start; /* ⬅️ keeps image pinned to the top */
  }

  .responsive-row-equal > * {
    flex: 1 1;             /* equal-width columns */
    min-width: 0;            /* prevents overflow */
  }
}
    /* Variant: wrapping row
    - on wider screens the row will wrap to multiple lines when items exceed available width
    - give children a reasonable min-width so wrapping behaves predictably
    */
    .responsive-row-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    }

    @media (min-width: 769px) {
    .responsive-row-wrap {
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .responsive-row-wrap > * {
        min-width: 140px; /* adjust as needed for your content */
        flex: 0 1 auto;
    }
    }
</style>

<div class="responsive-row-equal" {...$$restProps}>
  <div class="max-width-small">
    <slot />
  </div>

  <div class="max-width-small">
    <enhanced:img src={img} alt={alt} class="home-hero" />
  </div>
</div>