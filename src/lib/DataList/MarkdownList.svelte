<script>
  import { onMount } from 'svelte';
  import Modal from '$lib/Modal/Modal.svelte';
  import TagList from '$lib/TagList/TagList.svelte';

  // Provided from parent
  export let examples;
  export let compact = false;

  let markdownComponent = null;
  let currentExample = null;

  async function loadExamples() {
    console.log('MarkdownList given examples:', examples);
  }

  onMount(loadExamples);

  function openModal(example) {
    console.log("Opening modal for example:", example);
    markdownComponent = example.component;
    currentExample = example;
  }

  function closeModal() {
    console.log("Closing modal");
    markdownComponent = null;
    currentExample = null;
  }
</script>

<section class="example-list">
  {#each examples as example}
  <div>
       <TagList tags={example.tags || []} />
      <div class="example-card" on:click={() => openModal(example)}>
      <h2 >
        <a >
          {example.title || "loading"}
        </a>
      </h2>
      {#if !compact}
        <p>{example.summary || "loading summary"}</p>
      {/if}
    </div>

  </div>
  {/each}
</section>

{#if markdownComponent}
  <Modal onClose={closeModal}>
    <svelte:component this={markdownComponent} />
  </Modal>
{/if}

<style>
  /* Grid container */
  .example-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
  }

  /* Individual card */
  .example-card {
    background-color: var(--pico-background-color);
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem 1.25rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
  }

  /* Hover: float effect */
  .example-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  /* Heading and link styling */
  .example-card h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .example-card h2 a {
    color: var(--pico-color);
    text-decoration: none;
  }

  .example-card h2 a:hover {
    text-decoration: underline;
  }

  /* Paragraph styling */
  .example-card p {
    margin-top: 0.5rem;
    color: var(--pico-muted-color);
  }
</style>