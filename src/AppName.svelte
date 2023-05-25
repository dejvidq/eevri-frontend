<script>
  let accessToken = localStorage.getItem("accessToken");
  /* if (accessToken === null) { */
  /*   window.location.href = "/login"; */
  /* } */
</script>

{#if accessToken}
  <a href="/"><h1 class="brand">Eevri</h1></a>
{:else}
  <a href="/login"><h1 class="brand">Eevri</h1></a>
{/if}

<style>
  .brand {
    color: white;
  }
</style>
