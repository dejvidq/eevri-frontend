<script>
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken === null) {
    window.location.href = "/login";
  }
</script>

<h1 class="brand">Eevri</h1>
