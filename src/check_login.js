export const checkLogin = () => {
  const access_token = localStorage.getItem("accessToken");
  if (access_token) {
    fetch("http://localhost:8000/auth/login/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_token: access_token,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.expired) {
          localStorage.removeItem("accessToken");
          window.location.href = "/login";
        }
      })
      .catch((err) => console.log(err));
  } else {
    window.location.href = "/login";
  }
}
