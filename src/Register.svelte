<script>
  let registrationSuccessful = false;

  let username;
  let password;
  let email;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function handleSubmit() {
    document.querySelector(".usernameError").style.display = "none";
    document.querySelector(".emailError").style.display = "none";
    let error = false;
    if (username.length < 5) {
      document.querySelector(".usernameError").style.display = "block";
      error = true;
    }
    if (!emailRegex.test(email)) {
      document.querySelector(".emailError").style.display = "block";
      error = true;
    }
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[~!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]/.test(password)
    ) {
      document.querySelector(".passwordError").style.display = "block";
      error = true;
    }
    if (error) {
      return;
    }

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
      .then((res) => {
        if (res.status === 200) {
          registrationSuccessful = true;
        }
        return res.json();
      })
      .then((data) => {
        if (data.detail.includes("Username")) {
          document.querySelector(".usernameError").style.display = "block";
          document.querySelector(".usernameError").innerHTML = data.detail;
        }
        if (data.detail.includes("Email")) {
          document.querySelector(".emailError").style.display = "block";
          document.querySelector(".emailError").innerHTML = data.detail;
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function moveToLogin() {
    window.location.href = "/login";
  }
</script>

<div class="body">
  <div class="register-box">
    <h1>Register</h1>
    {#if !registrationSuccessful}
      <form method="POST" on:submit|preventDefault={handleSubmit}>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          bind:value={username}
        />
        <p class="usernameError">
          Username has to be longer than 5 characters!
        </p>

        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          bind:value={email}
        />
        <p class="emailError">Invalid email!</p>

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          bind:value={password}
        />
        <p class="passwordError">
          Password has to be longer than 8 characters and contain at least one
          lowercase letter, one uppercase, number and special character!
        </p>

        <button type="submit">Register</button>
      </form>
    {:else}
      <p id="successText">Registration successful!</p>
      <button class="moveToLogin" on:click={moveToLogin}
        >Go back to login</button
      >
    {/if}
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

  .usernameError,
  .emailError,
  .passwordError {
    color: red;
    margin: 5px;
    display: none;
  }

  #successText {
    color: #174a1e;
  }

  .moveToLogin {
    background-color: #174a1e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: center;
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
