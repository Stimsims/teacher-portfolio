<script>
  /** @type {{ title: string, summary: string, details: string }} */
  export let example;
</script>

{#if example}
  <article>
    <h2>{example.title}</h2>
    <p><em>{example.summary}</em></p>
    <div>
      <p>{example.details}</p>
    </div>
  </article>
{:else}
  <p>No example selected.</p>
{/if}
