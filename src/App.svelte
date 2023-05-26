<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";
  import Links from "./Links.svelte";
  import Add from "./Add.svelte";
  import Header from "./Header.svelte";
  import HeaderGuest from "./HeaderGuest.svelte";
  import LinkDetails from "./LinkDetails.svelte";
  import EditLink from "./EditLink.svelte";
  import TagLinks from "./TagLinks.svelte";
  import CategoryLinks from "./CategoryLinks.svelte";
  import SearchMy from "./SearchMy.svelte";
  import SearchAll from "./SearchAll.svelte";
  import ProfilePage from "./ProfilePage.svelte";

  import { title } from "./title.js";

  let access_token = localStorage.getItem("access_token");
</script>

<svelte:head>
  <title>Eevri</title>
</svelte:head>

<Router>
  <Route path="/login">
    <HeaderGuest />
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
  <Route path="/tag/:name" let:params>
    <Header />
    <TagLinks name={params.name} />
  </Route>
  <Route path="/category/:name" let:params>
    <Header />
    <CategoryLinks name={params.name} />
  </Route>
  <Route path="/link/:id" let:params>
    <LinkDetails id={params.id} />
  </Route>
  <Route path="/link/edit/:id" let:params>
    <Header />
    <EditLink id={params.id} />
  </Route>
  <Route path="/search/my/:name" let:params>
    <Header />
    <SearchMy name={params.name} />
  </Route>
  <Route path="/search/all/:name" let:params>
    <SearchAll name={params.name} />
  </Route>
  <Route path="/profile">
    <Header />
    <ProfilePage />
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
