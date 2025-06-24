<script>
  import { fade, scale } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import './Modal.css'

  export let onClose;

  const handleKeydown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div
  class="modal-backdrop"
  role="dialog"
  aria-modal="true"
  on:click={onClose}
>
  <div
    class="modal-container"
    on:click|stopPropagation
    transition:fade={{ duration: 150 }}
  >
    <div class="modal-content" transition:scale={{ duration: 300 }}>
      <div class="modal-scroll-area">
        <slot />
      </div>

      <button class="modal-close-button" on:click={onClose}>
        Close
      </button>
    </div>
  </div>
</div>