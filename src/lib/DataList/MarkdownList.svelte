<script>
 
  import Modal from '$lib/Modal/Modal.svelte';

  export let examples;
  let markdownComponent = null;
  let currentExample = null;

  async function openModal(example) {
    const module = await example.details();
    markdownComponent = module.default;
    currentExample = example;
  }

  function closeModal() {
    markdownComponent = null;
    currentExample = null;
  }
</script>

<section class="example-list">
  {#each examples as example}
    <div class="example-card">
      <h2><a class="opal-text" on:click={() => openModal(example)}>{example.title}</a></h2>
      <p>{example.summary}</p>
    </div>
  {/each}
</section>

{#if markdownComponent}
  <Modal onClose={closeModal}>
    <svelte:component this={markdownComponent} />
  </Modal>
{/if}
