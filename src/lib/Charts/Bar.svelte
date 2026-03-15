<script>
  import { onMount } from 'svelte';
  //import { chart } from 'svelte-apexcharts';


  /** @type {number[]} */
  export let series = []; // e.g. [1,2,3]

  /** @type {string} */
  export let title = '';

  export let height = '400px';
  // Export a handler function as a prop (default to empty function)
  export let onClick = () => {};

  console.log("BarChart received props:", { series, title, height });
  let mounted = false;
  let chart;
  const options = {
    chart: {
      type: 'bar',
      height,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      },
      toolbar: { show: false },
      events: {
        click: function(event, chartContext, opts) {
          // The last parameter opts contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
          console.log('Bar chart clicked:', { event, chartContext, opts });
          if(opts.seriesIndex >= 0 && opts.dataPointIndex >= 0) {
            let s = series[opts.seriesIndex].name;
            let x = series[opts.seriesIndex].data[opts.dataPointIndex].x;
            let y = series[opts.seriesIndex].data[opts.dataPointIndex].y;
            onClick({series: s, x, y});
          }
        }
      }
    },
    labels: series[0].data.map(e => e.x),
    series,
    title: { text: title },
    tooltip: { theme: 'light' },
    legend: {
        position: 'bottom'
    },
    // dataLabels: { enabled: true }
  };

  onMount(async () => {
    console.log("BarChart on mounted called")
    const mod = await import('svelte-apexcharts');
    chart = mod.chart;
    mounted = true;
  });
</script>

{#if mounted}
    <div use:chart={options} style="height: 100%; width: 100%;"></div>
{:else}
  <p>Loading chart…</p>
{/if}
