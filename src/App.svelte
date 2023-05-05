<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./Login.svelte";
  import AppName from "./AppName.svelte";
  import Register from "./Register.svelte";
  import Link from "./Link.svelte";

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
  <Route path="/">
    <div class="header">
      <div class="appName">
        <AppName />
      </div>
      <div class="user">
        <p>User</p>
      </div>
    </div>
  </Route>
</Router>

<style>
  :global(body) {
    background-color: #b82533;
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
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
  }

  .appName {
    margin-right: auto;
    margin-left: 20px;
  }

  .user {
    margin-left: auto;
    margin-right: 20px;
    margin-top: -10px;
    padding: 10px;
    color: black;
    background-color: yellow;
  }

  .link {
    top: 0;
    left: 0;
  }
</style>
