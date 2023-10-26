document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    // Function to show a specific slide
    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        }

        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        // Update the active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    // Event listener for the "Next" button
    nextButton.addEventListener("click", function () {
        currentIndex++;
        showSlide(currentIndex);
    });

    // Event listener for the "Previous" button
    prevButton.addEventListener("click", function () {
        currentIndex--;
        showSlide(currentIndex);
    });

    // Event listeners for the navigation dots
    dots.forEach((dot, i) => {
        dot.addEventListener("click", function () {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    // Function to automatically advance the slider
    function autoSlide() {
        currentIndex++;
        showSlide(currentIndex);
    }

    // Automatically advance the slider every 5 seconds (5000 milliseconds)
    const slideInterval = setInterval(autoSlide, 5000);
});