<script>
  export let name;
  import Link from "./Link.svelte";
  let access_token = localStorage.getItem("accessToken");
  let links = [];
  import Header from "./Header.svelte";
  import HeaderGuest from "./HeaderGuest.svelte";

  function getLinks() {
    fetch("http://localhost:8000/search/all/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        query: name,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        links = data.results;
      })
      .catch((err) => console.log(err));
  }
  getLinks();
</script>

{#if access_token}
  <Header />
{:else}
  <HeaderGuest />
{/if}
<h1>Global search results for: {name}</h1>
<div class="container">
  {#each links.reverse() as link}
    <div class="hiperlinks">
      <Link url="/link/{link.id}" name={link.name} />
    </div>
  {/each}
</div>

<style>
  h1 {
    top: 3%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
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
