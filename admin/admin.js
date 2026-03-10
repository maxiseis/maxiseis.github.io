const adminuser = "admin"
const adminpass = "admin123"

document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === adminuser && password === adminpass) {
        alert("welcome admin");
        console.log("Admin has logged in");
        window.location.href = "admin_dashboard.html"
    } else {
        alert("Invalid Credentials");
        console.log("breach det.");
    }
})