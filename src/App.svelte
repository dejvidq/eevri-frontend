<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./Login.svelte";
  import AppName from "./AppName.svelte";
  import Register from "./Register.svelte";
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
</style>
