document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg",
        "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg"
    ];

    // Typing Effect
    let message = "ကခဂဃင ,Your koe koe 💖";
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            letterText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    // Envelope Click Event
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("flap");
        if (envelope.classList.contains("flap")) {
            setTimeout(typeLetter, 1500);
        }
    });

    // Heart Hover Effect
    heart.addEventListener("mouseover", function () {
        heart.style.transform = "scale(1.2)";
    });

    heart.addEventListener("mouseleave", function () {
        heart.style.transform = "scale(1)";
    });

    // Confetti Effect on Opening
    envelope.addEventListener("click", function () {
        if (envelope.classList.contains("flap")) {
            createConfetti();
        }
    });

    function createConfetti() {
        for (let i = 0; i < 30; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            document.body.appendChild(confetti);
            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }
    }

    // Function to create a heart
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");

        const colors = ["#D70040", "#FFFFFF", "#FFD700"]; // Red, White, Gold
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];

        heart.style.setProperty("--heart-color", heart.style.background);
        return heart;
    }

    // Function to position hearts at the top and make them fall
    function positionHearts() {
        const numHearts = 100; // Number of hearts to create
        for (let i = 0; i < numHearts; i++) {
            const heart = createHeart();
            heart.style.left = `${Math.random() * 100}%`; // Random horizontal position
            heart.style.top = `${Math.random() * -50}%`; // Start above the screen
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
            heart.style.animationDelay = `${Math.random() * 2}s`; // Random delay for staggered falling
            document.querySelector(".background-hearts").appendChild(heart);
        }
    }

    // Function to place images randomly
    function placeImages() {
        imageList.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = `images/${imgSrc}`; // Adjust path if necessary
            img.style.top = `${Math.random() * 90}vh`;  // Random vertical position
            img.style.left = `${Math.random() * 90}vw`; // Random horizontal position
            img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`; // Slight random rotation
            imageContainer.appendChild(img);
        });
    }

    positionHearts(); // Call the function to generate hearts
    placeImages(); // Call the function to place images
});
