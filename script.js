function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Handle Form Submission
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("reportForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let details = document.getElementById("details").value;

            if (name && email && details) {
                alert("Case Submitted Successfully!");
                form.reset();
            } else {
                alert("Please fill all the fields.");
            }
        });
    }
});
