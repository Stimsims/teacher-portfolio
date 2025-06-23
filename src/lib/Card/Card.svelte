<script>
  import { slide, fade } from 'svelte/transition';
  import './Card.css';

  export let title = "";
  export let summary = "";
  export let details = "";

  let open = false;
</script>

<style>
  .card {
    all: unset; /* make button behave like a div */
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--pico-muted-color);
    box-shadow: var(--pico-card-box-shadow);
    transition: transform 0.2s ease, background 0.3s;
    cursor: pointer;
    text-align: left;
  }

  .card:hover {
    transform: scale(1.02);
    background: var(--pico-muted-hover-color, #f0f0f0);
  }

  .card h3 {
    margin: 0 0 0.5rem 0;
  }

  .card-content {
    margin-top: 1rem;
  }
</style>

<!-- ✅ Single, accessible button used as card -->
<button type="button" class="card" on:click={() => (open = !open)}>
  <h3>{title}</h3>
  <p>{summary}</p>

  {#if open}
    <div class="card-content" transition:slide|local>
      <div transition:fade>
        <p>{details}</p>
      </div>
    </div>
  {/if}
</button>
