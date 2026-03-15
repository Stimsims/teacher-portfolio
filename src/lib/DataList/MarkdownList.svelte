<script>
  import { onMount } from 'svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import TagList from '$lib/TagList/TagList.svelte';

  // Provided from parent
  export let examples;

  //let filledExamples = [];
  let markdownComponent = null;
  let currentExample = null;

  function openModal(example) {
    console.log(`Opening modal for example: ${example.title}`);
    markdownComponent = example.component;
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
      <h2>
        <a class="opal-text" on:click={() => openModal(example)}>
          {example.title || "loading"}
        </a>
      </h2>
      <TagList tags={example.tags || []} />
      <p>{example.summary || "loading summary"}</p>
    </div>
  {/each}
</section>

{#if markdownComponent}
  <Modal onClose={closeModal}>
    <svelte:component this={markdownComponent} />
  </Modal>
{/if}