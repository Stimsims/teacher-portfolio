<script>
  import { onMount } from 'svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import TagList from '$lib/TagList/TagList.svelte';

  // Provided from parent
  export let examples;

  let filledExamples = [];
  let markdownComponent = null;
  let currentExample = null;

  // Load all example details asynchronously
  async function loadExamples() {
    filledExamples = await Promise.all(
      examples.map(async (example) => {
        const module = await example.details();
        console.log('Loaded long awaited module for example:', module);
        return {
          ...example,
          component: module.default,
          metadata: module.metadata // frontmatter from .svx
        };
      })
    );

    console.log('Loaded examples:', filledExamples);
    console.log('First metadata:', filledExamples[0].metadata);
  }

  onMount(loadExamples);

  function openModal(example) {
    markdownComponent = example.component;
    currentExample = example;
  }

  function closeModal() {
    markdownComponent = null;
    currentExample = null;
  }
</script>

<section class="example-list">
  {#each filledExamples as example}
    <div class="example-card">
      <h2>
        <a class="opal-text" on:click={() => openModal(example)}>
          {example.metadata?.title || "loading"}
        </a>
      </h2>
      <TagList tags={example.metadata?.tags || []} />
      <p>{example.metadata?.summary || "loading summary"}</p>
    </div>
  {/each}
</section>

{#if markdownComponent}
  <Modal onClose={closeModal}>
    <svelte:component this={markdownComponent} />
  </Modal>
{/if}