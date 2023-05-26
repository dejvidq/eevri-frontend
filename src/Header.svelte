<script>
  import AppName from "./AppName.svelte";

  document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        var searchText = searchInput.value.trim();
        if (searchText !== "") {
          window.location.href = "/search/my/" + encodeURIComponent(searchText);
        }
      }
    });
  });
</script>

<div class="header">
  <div class="appName">
    <AppName />
  </div>
  <div class="search">
    <input id="searchInput" type="text" placeholder="Search" />
  </div>
  <div class="user">
    <a href="/profile"><img src="/img/profil.png" alt="profile" /></a>
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

  .search {
    width: 60%;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 5px;
  }

  .search input[type="text"] {
    padding-left: 15px;
    flex: 1;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 20px;
    background-color: white;
    color: black;
  }

  .search input[type="text"]::placeholder {
    color: #4d4d4d;
  }

  .search img {
    margin-left: 10px;
  }
</style>
