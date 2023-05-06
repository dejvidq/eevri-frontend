<script>
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken === null) {
    window.location.href = "/login";
  }
</script>

<a href="/"><h1 class="brand">Eevri</h1></a>

<style>
  .brand {
    color: white;
  }
</style>
