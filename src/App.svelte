<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";
  import Links from "./Links.svelte";
  import Add from "./Add.svelte";
  import Header from "./Header.svelte";
  import LinkDetails from "./LinkDetails.svelte";
  import EditLink from "./EditLink.svelte";

  let access_token = localStorage.getItem("accessToken");
  if (access_token) {
    fetch("http://localhost:8000/auth/login/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_token: access_token,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.expired) {
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        }
      })
      .catch((err) => console.log(err));
  }
</script>

<Router>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
  <Route path="/add">
    <Header />
    <Add />
  </Route>
  <Route path="/">
    <Header />
    <a href="/add" class="add">Add</a>
    <Links />
  </Route>
  <Route path="/link/:id" let:params>
    <Header />
    <LinkDetails id={params.id} />
  </Route>
  <Route path="/link/edit/:id" let:params>
    <Header />
    <EditLink id={params.id} />
  </Route>
  <Route path="/link/delete/:id" let:params>
    <Header />
    <EditLink id={params.id} />
  </Route>
  <Route path="/link/archive/:id" let:params>
    <Header />
    <EditLink id={params.id} />
  </Route>
</Router>

<style>
  :global(body) {
    background-color: #b82533;
    min-height: 100vh;
  }

  /* .appName { */
  /*   font-size: 20px; */
  /*   font-weight: bold; */
  /*   /* position: absolute; */
  /*   /* top: 0; */
  /*   left: 20px; */
  /*   /* margin: 0; */
  /*   /* margin-top: -35px; */
  /* } */
  /* .user { */
  /*   font-size: 20px; */
  /*   font-weight: bold; */
  /*   /* position: absolute; */
  /*   /* top: 0; */
  /*   right: 30px; */
  /*   margin-top: 0px; */
  /* } */
  /**/
  /* .header { */
  /*   position: absolute; */
  /*   top: 0; */
  /*   left: 0; */
  /*   right: 0; */
  /* } */

  .add {
    position: absolute;
    top: 12%;
    color: white;
    padding: 12px;
    border-radius: 10px;
    transform: translateX(-50%);
    width: 20%;
    background-color: #174a1e;
  }

  .add:hover {
    background-color: #2e5c34;
  }
</style>
