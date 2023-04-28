<script>
  import Login from "./Login.svelte";
  import AppName from "./AppName.svelte";
  import Register from "./Register.svelte";

  let currentView = "login";

  function switchToRegister() {
    currentView = "register";
  }
  let accessToken = localStorage.getItem("accessToken");
</script>

<main>
  <div>
    <AppName />
    {#if accessToken === null}
      <div>
        {#if currentView == "login"}
          <Login onRegisterClick={switchToRegister} />
        {:else if currentView == "register"}
          <Register />
        {/if}
      </div>
    {:else}
      <p>You are logged in</p>
    {/if}
  </div>
</main>

<style>
  :global(body) {
    background-color: #b82533;
  }
</style>
