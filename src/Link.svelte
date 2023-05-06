<script>
  export let url;
  export let name;
</script>

<div class="body">
  <div class="link-box">
    <a href={url}><h2>{name}</h2></a>
  </div>
</div>

<style>
  .link-box {
    height: 60px;
    background-color: #bcc41b;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .link-box h2 {
    color: black;
    text-align: left;
    padding-top: 10px;
    padding-left: 20px;
  }

  .link-box:hover {
    background-color: #d0d55f;
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
      height: 40px;
    }

    .link-box h2 {
      color: black;
      /* text-align: center; */
      padding-top: 0;
    }

    /* .link-box a { */
    /*   font-size: 16px; */
    /* } */
  }
</style>
