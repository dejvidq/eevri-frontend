<script>
  export let id;
  let url;
  let name;
  let description;
  let tags;
  let category;
  let link_public;
  let access_token = localStorage.getItem("accessToken");

  function handleSubmit() {
    if (!url) {
      document.querySelector(".editError").style.display = "block";
      return;
    }
    if (tags === null) tags = [];
    else if (typeof tags === "string") tags = [tags.split(",")];
    else if (Array.isArray(tags)) tags = tags;
    else tags = [];
    fetch("http://localhost:8000/link/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        new_url: url,
        new_name: name,
        new_description: description,
        new_tags: tags,
        new_category: category,
        new_public: link_public,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.location.href = "/link/" + id;
      })
      .catch((err) => console.log(err));
  }

  fetch(`http://localhost:8000/link/${id}`, {
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
      console.log(data);
      url = data.link.url;
      name = data.link.name;
      description = data.link.description;
      tags = data.link.tags;
      category = data.link.category;
      link_public = data.link.public;
    })
    .catch((err) => console.log(err));
</script>

<div class="body">
  <div class="edit-box">
    <h1>Edit</h1>
    <form method="PUT" on:submit|preventDefault={handleSubmit}>
      <label for="url">Url</label>
      <input
        type="text"
        id="url"
        name="url"
        placeholder="Enter url"
        bind:value={url}
      />
      <p class="editError">URL can't be empty!</p>

      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter link name"
        bind:value={name}
      />

      <label for="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter link description"
        rows="4"
        cols="50"
        bind:value={description}
      />
      <label for="tags">Tags</label>
      <input
        type="text"
        id="tags"
        name="tags"
        placeholder="Enter link tags"
        bind:value={tags}
      />
      <label for="category">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter category"
        bind:value={category}
      />

      <label for="public">Public</label>
      <select id="public" name="public" bind:value={link_public}>
        <option value="false">False</option>
        <option value="true">True</option>
      </select>

      <button type="submit">Save</button>
    </form>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .edit-box {
    width: 400px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .edit-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .edit-box input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
  }

  .edit-box button[type="submit"] {
    background-color: #174a1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  .edit-box button[type="submit"]:hover {
    background-color: #45a049;
  }

  .edit-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }
  .editError {
    color: red;
    margin: 5px;
    display: none;
  }

  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .edit-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .edit-box h1 {
      margin-bottom: 10px;
    }

    .edit-box input[type="text"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    .edit-box button[type="submit"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    #description {
      max-width: 95%;
    }
  }
</style>
