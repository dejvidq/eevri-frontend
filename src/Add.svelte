<script>
  let url;
  let name;
  let description;
  let tags;
  let category;
  let link_public;
  let addSuccessful = false;

  let access_token = localStorage.getItem("accessToken");

  function handleSubmit() {
    if (!url) {
      document.querySelector(".addError").style.display = "block";
      return;
    }
    fetch("http://localhost:8000/link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        url: url,
        name: name,
        description: description,
        tags:
          tags != null
            ? tags.split(/\s+/).filter((item) => item.length > 0)
            : [],
        category: category,
        public: link_public,
      }),
    })
      .then((res) => {
        if (res.ok) {
          addSuccessful = true;
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (addSuccessful) {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  }

  function updatePlaceholder() {
    var url = document.getElementById("url");
    var name = document.getElementById("name");
    name.setAttribute("placeholder", url.value);
  }
</script>

<div class="body">
  <div class="add-box">
    <h1>Add</h1>
    <form method="POST" on:submit|preventDefault={handleSubmit}>
      <label for="url">Url</label>
      <input
        type="text"
        id="url"
        name="url"
        placeholder="Enter url"
        bind:value={url}
        on:keyup={updatePlaceholder}
      />
      <p class="addError">URL can't be empty!</p>

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

      <button type="submit">Add</button>
    </form>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .add-box {
    width: 400px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .add-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .add-box input[type="text"],
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

  .add-box button[type="submit"] {
    background-color: #174a1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  .add-box button[type="submit"]:hover {
    background-color: #45a049;
  }

  .add-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }
  .addError {
    color: red;
    margin: 5px;
    display: none;
  }

  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .add-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .add-box h1 {
      margin-bottom: 10px;
    }

    .add-box input[type="text"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    .add-box button[type="submit"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    #description {
      max-width: 95%;
    }
  }
</style>
