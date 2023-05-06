<script>
  import Link from "./Link.svelte";
  let access_token = localStorage.getItem("accessToken");
  let links = [];

  function getLinks() {
    fetch("http://localhost:8000/link", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        links = data.links;
      })
      .catch((err) => console.log(err));
  }
  getLinks();
</script>

<div class="container">
  {#each links.reverse() as link}
    <div class="hiperlinks">
      <Link url="/link/{link.id}" name={link.name} />
    </div>
  {/each}
</div>

<style>
  .container {
    top: 17%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    min-height: 10%;
    max-height: 80%;
    overflow-y: scroll;
  }

  .container > .hiperlinks {
    /* margin-top: 10px; */
    height: 50px;
    margin-bottom: 2%;
  }
</style>
