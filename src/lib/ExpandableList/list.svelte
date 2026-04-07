<!-- Primary outline -->


<script>
  import './../../app.css';
  import './index.css';
  import MarkdownList from '$lib/DataList/MarkdownList.svelte';

  export let items = [];
  console.log(`ExpandableList received items:`, items);
  let openIndex = null;


  function toggleItem(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<div class="expandable-list">
  {#each items as item, i}
    <details>
        <summary role="button" class="outline">{item.title}</summary>
        <div>
          <p>{item.content}</p>
          <MarkdownList  compact="true" examples={item.posts}/>
        </div>
    </details>
  {/each}
</div>
