<script>
  let access_token = localStorage.getItem("accessToken");
  export let password;
  export let currentPassword;
  export let confirmPassword;

  function changePassword() {
    if (password !== confirmPassword) {
      document.querySelector(".passwordError").style.display = "block";
    }
    fetch("http://localhost:8000/user/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        old_password: currentPassword,
        new_password: password,
        confirm_password: confirmPassword,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Password changed successfully") {
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        }
      })
      .catch((err) => console.log(err));
  }

  function deleteAccount() {
    let answer = prompt(
      "Are you sure you want to delete your account? Type 'Remove Account' to confirm."
    );
    alert(">>" + answer + "<<");
    if (answer === "Remove Account") {
      fetch("http://localhost:8000/user/account", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => {
          if (res.status === 204) {
            localStorage.removeItem("accessToken");
            window.location.href = "/login";
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }

  function Logout() {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
</script>

<div class="body">
  <div class="profile-box">
    <h1>Profile</h1>
    <label for="currentPassword">Current password</label>
    <input
      type="password"
      id="currentPassword"
      name="currentPassword"
      placeholder="Enter currentPassword"
      bind:value={currentPassword}
    />
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter password"
      bind:value={password}
    />
    <label for="confirmPassword">Confirm Password</label>
    <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Enter confirmPassword"
      bind:value={confirmPassword}
    />
    <p class="passwordError">Passwords don't match</p>
    <div class="buttons">
      <button on:click={changePassword} class="changePassword"
        >Change Password</button
      >
      <button on:click={deleteAccount} class="delete-account-button"
        >Delete Account</button
      >
      <button on:click={Logout} class="logout-button">Logout</button>
    </div>
  </div>
</div>

<style>
  label {
    color: black;
  }

  .profile-box {
    width: 400px;
    margin: 100px auto;
    background-color: #bcc41b;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .profile-box h1 {
    color: black;
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-box input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
  }

  .profile-box::after {
    content: "";
    clear: both;
    display: table;
  }

  ::placeholder {
    text-align: center;
  }
  .passwordError {
    color: white;
    margin: 0 5px 5px 5px;
    background-color: red;
    display: none;
  }

  .buttons button {
    margin: 5px;
  }

  .changePassword {
    background-color: #174a1e;
  }

  .delete-account-button {
    background-color: red;
  }

  .logout-button {
    background-color: #414a1e;
  }
  /* Mobile styles */
  @media only screen and (max-width: 900px) {
    .profile-box {
      width: 260px;
      margin: 10px auto;
      padding: 10px;
    }

    .profile-box h1 {
      margin-bottom: 10px;
    }

    .profile-box input[type="password"] {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
</style>
