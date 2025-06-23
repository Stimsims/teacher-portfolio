<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /** @type {{ title: string, summary: string, details: string, id?: string, image?: string }[]} */
  export let examples = [];
  console.log("DataList examples", examples)

  function select(example) {
    dispatch('select', example);
  }
</script>

<style>
  ul {
    list-style: none;
    padding-left: 0;
  }

  li button {
    background: none;
    border: none;
    padding: 0.5rem 0;
    text-align: left;
    color: var(--pico-primary);
    cursor: pointer;
    font: inherit;
    text-decoration: underline;
  }

  li button:hover {
    text-decoration: none;
  }
</style>

<ul>
  {#each examples as example}
    <li>
      <button on:click={() => select(example)}>
        {example.title}
      </button>
    </li>
  {/each}
</ul>
