// ============================================================
// APES PORTAL — SHARED JAVASCRIPT
// Runs on every page that loads topbar.html
// ============================================================


// ------------------------------------------------------------
// 1. Close dropdown when clicking outside
// ------------------------------------------------------------
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".user-menu");

    // If dropdown exists AND click is outside → close it
    if (menu && !menu.contains(event.target)) {
        menu.classList.remove("open");
    }
});


// ------------------------------------------------------------
// 2. Toggle dropdown (called from topbar.html)
// ------------------------------------------------------------
function toggleMenu() {
    const menu = document.querySelector(".user-menu");
    if (menu) {
        menu.classList.toggle("open");
    }
}


// ------------------------------------------------------------
// 3. Global logout function
// ------------------------------------------------------------
function logout() {
    localStorage.removeItem("apes_logged_in");
    localStorage.removeItem("apes_username");
    window.location.href = "login.html";
}
