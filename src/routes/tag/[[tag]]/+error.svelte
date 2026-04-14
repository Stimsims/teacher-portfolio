<!-- /src/routes/tag/[tag]/+error.svelte -->
<script>
  export let error;
</script>

<h1>404 - Tag Not Found</h1>
<p>{error.message}</p>
<a href="/">Go back home</a>