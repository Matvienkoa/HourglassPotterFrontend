function login() {
        const loginInfos = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
        const myInit = {
            method: "POST",
            body: JSON.stringify(loginInfos),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }
        fetch(`https://hourglass-hp.herokuapp.com/api/auth/login`, myInit)
        .then(res => res.json())
        .then(data => {
            console.log(data.token)
            localStorage.setItem("token", data.token);
            if(data.token) {
                window.location.href = `points.html`
            }
        })
};