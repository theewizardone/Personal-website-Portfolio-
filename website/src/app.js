(function () {
    const controls = document.querySelectorAll(".control");
    const sections = document.querySelectorAll(".container");

    controls.forEach(button => {
        button.addEventListener("click", function() {
            // Toggle active button
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Toggle active section
            document.querySelector(".container.active").classList.remove("active");
            document.getElementById(this.dataset.id).classList.add("active");
        });
    });

    // Theme toggle
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();

