<script>
  export let onRegisterClick;
  let username;
  let password;

  function handleSubmit() {
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let accessToken = data.access_token;
        localStorage.setItem("accessToken", accessToken);
        location.reload();
      })
      .catch((err) => console.log(err));
  }
</script>

<div class="body">
  <div class="login-box">
    <h1>Login</h1>
    <form method="POST" on:submit|preventDefault={handleSubmit}>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        bind:value={username}
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        bind:value={password}
      />

      <button type="submit">Log in</button>
      <a href="#" on:click|preventDefault={onRegisterClick}>Register!</a>
    </form>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .login-box {
    width: 400px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .login-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .login-box input[type="text"],
  .login-box input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
  }

  .login-box button[type="submit"] {
    background-color: #174a1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  .login-box button[type="submit"]:hover {
    background-color: #45a049;
  }

  .login-box a {
    color: #174a1e;
    text-decoration: none;
    float: left;
    margin-top: 8px;
  }

  .login-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }

  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .login-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .login-box h1 {
      margin-bottom: 10px;
    }

    .login-box input[type="text"],
    .login-box input[type="password"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    .login-box button[type="submit"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    .login-box a {
      font-size: 16px;
    }
  }
</style>
