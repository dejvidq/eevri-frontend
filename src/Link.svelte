<div class="body">
  <div class="link-box">
    <h1>link</h1>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .link-box {
    width: 400px;
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
  .link-box a {
    color: #174a1e;
    text-decoration: none;
    float: left;
    margin-top: 8px;
  }

  .link-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }
  .linkError {
    color: red;
    margin: 5px;
    display: none;
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

    .link-box a {
      font-size: 16px;
    }
  }
</style>
