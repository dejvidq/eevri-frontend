<script>
  export let id;
  let url;
  let name;
  let description;
  let tags;
  let category;

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
      return res.json();
    })
    .then((data) => {
      url = data.link.url;
      name = data.link.name;
      description = data.link.description !== null ? data.link.description : "";
      tags = data.link.tags ? data.link.tags.join(", ") : "";
      category = data.link.category;
    })
    .catch((err) => console.log(err));
</script>

<div class="body">
  <div class="link-box">
    <h1>Link #{id}</h1>
    <label for="url">Url</label>
    <a href="//{url}"><p>{url}</p></a>
    <label for="name">Name</label>
    <p>{name}</p>
    <label for="description">Description</label>
    <p>{description}</p>
    <label for="tags">Tags</label>
    <p>{tags}</p>
    <label for="category">Category</label>
    <p>{category}</p>
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
    padding: 2px;
    min-height: 20px;
    background-color: #242424;
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
