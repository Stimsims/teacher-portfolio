<script>
  import { onMount } from 'svelte';

  /** @type {{ categories: string[] }} */
  export let xaxis = { categories: [] };

  /** @type {{ name: string, data: number[] }[]} */
  export let series = [];

  /** @type {string} */
  export let title = '';

  let chart;
  let mounted = false;

  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      animations: { enabled: true }
    },
    title: { text: title },
    xaxis,
    series,
    dataLabels: { enabled: false },
    tooltip: { theme: 'light' }
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
