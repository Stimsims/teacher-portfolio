<script>
  import { onMount } from 'svelte';
  //import { chart } from 'svelte-apexcharts';

  /** @type {{ categories: string[] } } */
  export let xaxis = []; // e.g. { categories: ['A', 'B', 'C'] }


  /** @type {number[]} */
  export let series = []; // e.g. [1,2,3]

  /** @type {string} */
  export let title = '';

  let mounted = false;
  let chart;
  
  const options = {
    chart: {
      type: 'donut',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      },
      toolbar: { show: false }
    },
    labels: xaxis.categories,
    series,
    title: { text: title },
    tooltip: { theme: 'light' },
    legend: {
        position: 'bottom'
    }
    // dataLabels: { enabled: true }
  };

  onMount(async () => {
    console.log("PieChart on mounted called")
    const mod = await import('svelte-apexcharts');
    chart = mod.chart;
    mounted = true;
  });
</script>

{#if mounted}
    <div use:chart={options} ></div>
{:else}
  <p>Loading chart…</p>
{/if}
