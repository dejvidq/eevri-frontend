<div class="body">
  <div class="link-box">
    <a href="https://google.com"><h1>link</h1></a>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .link-box {
    height: 100px;
    background-color: #bcc41b;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .link-box h1 {
    color: black;
    /* text-align: center; */
    padding-top: 25px;
  }

  /* .link-box::after { */
  /*   content: ""; */
  /*   clear: both; */
  /*   display: table; */
  /* } */

  /* ::placeholder { */
  /*   text-align: center; */
  /* } */
  /* .linkError { */
  /*   color: red; */
  /*   margin: 5px; */
  /*   display: none; */
  /* } */

  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .link-box {
      width: 280px;
      margin: 1px auto;
      padding: 5px;
      height: 100px;
    }

    .link-box h1 {
      color: black;
      /* text-align: center; */
      padding-top: 0px;
    }

    .link-box a {
      font-size: 16px;
    }
  }
</style>
