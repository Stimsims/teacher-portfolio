<script>
  import { fade, scale } from 'svelte/transition';
  import './Modal.css'
  export let title;
  export let summary;
  export let details;
  export let onClose;

  // Handle ESC key globally while modal is open
  const handleKeydown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  // Attach/remove listener when modal is mounted
  import { onMount, onDestroy } from 'svelte';
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });
  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div
  class="modal-backdrop"
  role="button"
  tabindex="0"
  aria-label="Close modal"
  on:click={onClose}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') onClose();
  }}
>
  <div
    role="presentation"
    class="modal-content"
    transition:fade={{ duration: 150 }}
    on:mousedown|stopPropagation
  >
    <div transition:scale={{ duration: 300 }}>
      <button class="close-button" on:click={onClose}>&times;</button>
      <h2>{title}</h2>
      <p><em>{summary}</em></p>
      <p>{details}</p>
    </div>
  </div>
</div>
