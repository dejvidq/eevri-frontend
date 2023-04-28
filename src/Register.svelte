<script>
  let username;
  let password;
  let email;

  function handleSubmit() {
    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
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
  <div class="register-box">
    <h1>Register</h1>
    <form method="POST" on:submit|preventDefault={handleSubmit}>
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        bind:value={username}
      />

      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Enter your email"
        bind:value={email}
      />

      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        bind:value={password}
      />

      <button type="submit">Register</button>
    </form>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .register-box {
    width: 400px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .register-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .register-box input[type="text"],
  .register-box input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
  }

  .register-box button[type="submit"] {
    background-color: #174a1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }

  .register-box button[type="submit"]:hover {
    background-color: #45a049;
  }

  .register-box::after {
    content: "";
    clear: both;
    display: table;
  }
  ::placeholder {
    text-align: center;
  }

  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .register-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .register-box h1 {
      margin-bottom: 10px;
    }

    .register-box input[type="text"],
    .register-box input[type="password"] {
      padding: 8px 16px;
      font-size: 16px;
    }

    .register-box button[type="submit"] {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
</style>
