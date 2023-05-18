<script>
  export let name;
  import Link from "./Link.svelte";
  let access_token = localStorage.getItem("accessToken");
  let links = [];

  function getLinks() {
    fetch("http://localhost:8000/search/my", {
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

  function searchGlobal() {
    window.location.href = "/search/all/" + encodeURIComponent(name);
  }
</script>

<h1>Search results for: {name}</h1>
<div class="container">
  <button class="searchAll" on:click={searchGlobal}>Search globally</button>
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

  .searchAll {
    width: 20%;
    padding: 12px;
    border-radius: 10px;
    width: 20%;
    background-color: #174a1e;
  }

  .container > .hiperlinks {
    /* margin-top: 10px; */
    height: 50px;
    margin-bottom: 2%;
  }
</style>
