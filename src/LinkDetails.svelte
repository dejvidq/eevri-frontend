<script>
  export let id;
  let url;
  let name;
  let description;
  let tags;
  let category;
  let link_public;
  let archived;
  let archiveButtonText;
  let mine;

  import Header from "./Header.svelte";
  import HeaderGuest from "./HeaderGuest.svelte";

  let access_token = localStorage.getItem("accessToken");

  fetch(`http://localhost:8000/link/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => {
      if (res.status === 404) {
        window.location.href = "/";
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      url = setCorrectUrl(data.link.url);
      name = data.link.name;
      description = data.link.description !== null ? data.link.description : "";
      tags = data.link.tags ? data.link.tags.join(", ") : "";
      category = data.link.category;
      link_public = data.link.public;
      archived = data.link.archived;
      mine = data.link.mine;
    })
    .catch((err) => console.log(err));

  function update_link(new_data) {
    fetch(`http://localhost:8000/link/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        ...new_data,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function toggle_archive_link() {
    update_link({ new_is_archived: !archived });
    archived = !archived;
  }
  function toggle_public_link() {
    update_link({ new_public: !link_public });
    link_public = !link_public;
  }

  function delete_link() {
    if (
      confirm(
        "Are you sure you want to delete this link? This action can't be undone!"
      )
    ) {
      fetch(`http://localhost:8000/link/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            window.location.href = "/";
          }
          return res.json();
        })
        .catch((err) => console.log(err));
    }
  }

  function setCorrectUrl(link) {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      return link;
    } else {
      return "http://" + link;
    }
  }

  $: archiveButtonText = archived ? "Unarchive" : "Archive";
  $: publicButtonText = link_public ? "Unpublish" : "Publish";
</script>

{#if access_token}
  <Header />
{:else}
  <HeaderGuest />
{/if}
<div class="body">
  <div class="link-box">
    <h1>{name}</h1>
    <label for="url">Url</label>
    <a href={url} target="_blank"><p>{url}</p></a>
    {#if description}
      <label for="description">Description</label>
      <p>{description}</p>
    {/if}
    {#if tags}
      <label for="tags">Tags</label>
      <p>
        {#each tags.split(",") as tag}
          {#if access_token}
            <a href="/tag/{tag.trim()}">{tag}</a>
          {:else}
            {tag}
          {/if}
        {/each}
      </p>
    {/if}
    <label for="category">Category</label>
    {#if access_token}
      <p><a href="/category/{category}">{category}</a></p>
    {:else}
      <p>{category}</p>
    {/if}
    <label for="public">Public</label>
    <p>{link_public}</p>
    <label for="archived">Archived</label>
    <p>{archived}</p>
    <br />
    {#if mine}
      <div class="buttons">
        <a href="/link/edit/{id}" class="edit-button">Edit</a>
        <button on:click={delete_link} class="delete-button">Delete</button>
        <button on:click={toggle_archive_link} class="archive-button"
          >{archiveButtonText}</button
        >
        <button on:click={toggle_public_link} class="public-button"
          >{publicButtonText}</button
        >
      </div>
    {/if}
  </div>
</div>

<style>
  label {
    color: black;
  }

  .link-box {
    width: 900px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .link-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .link-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }

  p {
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid black;
    padding: 5px;
    min-height: 20px;
    background-color: #242424;
    border-radius: 10px;
  }

  .buttons a,
  .buttons button {
    padding: 15px;
    margin: 10px;
    color: white;
    border-radius: 10px;
  }

  .edit-button {
    background-color: #0400bb;
  }
  .delete-button {
    background-color: #cb2040;
  }
  .archive-button {
    background-color: #bb5b00;
  }
  .public-button {
    background-color: #105a00;
  }

  p a {
    color: white;
  }
  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .link-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .link-box h1 {
      margin-bottom: 10px;
    }
  }
</style>
