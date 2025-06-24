<script>
  //import { chart } from 'svelte-apexcharts';
    import { onMount } from 'svelte';
  /** @type {{ categories: string[] } } */
  export let xaxis = []; // e.g. { categories: ['A', 'B', 'C'] }
  /** @type {{
   * name: string,
   * data: number[] 
   * }[] } */
  export let series = [];     // e.g. [{ name: 'Votes', data: [10, 20, 15] }]
  /** @type {string} */
  export let title = '';

  let chart;
  let mounted = false;

  let options = {
    chart: {
      type: "bar",
    },
    xaxis,
    series
  };
  onMount(async () => {
    const mod = await import('svelte-apexcharts');
    chart = mod.chart;
    mounted = true;
  });
</script>


{#if mounted}
    <div use:chart={options} style="height: 350px;"></div>
{:else}
  <p>Loading chart…</p>
{/if}
