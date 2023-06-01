<script>
  import { title } from "./title.js";
  title.set("Eevri");
  import { checkLogin } from "./check_login.js";
  checkLogin();
  import Link from "./Link.svelte";
  let access_token = localStorage.getItem("accessToken");
  let links = [];

  function getLinks() {
    fetch("http://localhost:8000/link?archived=1", {
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

<h1>Archived links</h1>
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
    min-height: 0;
    max-height: 80%;
    overflow-y: scroll;
  }

  .container > .hiperlinks {
    /* margin-top: 10px; */
    height: 50px;
    margin-bottom: 2%;
  }
</style>
