<script>
  export let url;
  export let name;
  export let description;
  export let tags;
  export let category;
  export let username;
</script>

<div class="body">
  <div class="link-box">
    <h1>{name}</h1>
    <label for="author">Author</label>
    <p>{username}</p>
    <label for="url">Url</label>
    <a href="//{url}"><p>{url}</p></a>
    {#if description}
      <label for="description">Description</label>
      <p>{description}</p>
    {/if}
    {#if tags}
      <label for="tags">Tags</label>
      <p>
        {#each tags.split(",") as tag}
          <a href="/tag/{tag.trim()}">{tag}</a>
        {/each}
      </p>
    {/if}
    <label for="category">Category</label>
    <p><a href="/category/{category}">{category}</a></p>
    <label for="public">Public</label>
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
