<script>
  import AppName from "./AppName.svelte";
</script>

<div class="header">
  <div class="appName">
    <AppName />
  </div>
  <div class="user">
    <a href="/profile"><img src="../img/profil.png" alt="profile" /></a>
  </div>
</div>

<style>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -30px;
    height: 120px;
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
    color: white;
  }

  img {
    width: 50px;
    margin-top: 30px;
  }
</style>
