<!-- src/lib/components/TagList.svelte -->
<script>
  export let tags = ["hello", "world"];

  function goToTag(tag) {
    window.location.href = `/tag/${tag}`;
  }
</script>

<ul class="tags">
  {#each tags as tag}
    <li class="tag" on:click={() => goToTag(tag)}>
      {tag}
    </li>
  {/each}
</ul>

<style>
  .tags {
    list-style: none;
    padding: 0;
  }
  .tag {
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 5px 10px;
    background: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .tag:hover {
    background: #ddd;
  }
</style>