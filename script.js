document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg",
        "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg", "zhuzhu9.jpg",
        "zhuzhu10.jpg", "zhuzhu11.jpg", "zhuzhu12.jpg",
        "zhuzhu13.jpg", "zhuzhu14.jpg", "zhuzhu15.jpg",
        "zhuzhu16.jpg", "zhuzhu17.jpg", "zhuzhu18.jpg",
        "zhuzhu19.jpg", "zhuzhu20.jpg", "zhuzhu21.jpg",
        "zhuzhu22.jpg", "zhuzhu23.jpg", "zhuzhu24.jpg",
        "zhuzhu25.jpg", "zhuzhu26.jpg", "zhuzhu27.jpg",
        "zhuzhu28.jpg", "zhuzhu29.jpg", "zhuzhu30.jpg",
        "zhuzhu31.jpg", "zhuzhu32.jpg", "zhuzhu33.jpg",
        "zhuzhu34.jpg", "zhuzhu35.jpg",
    ];

    let message = "ကခဂဃင ,Your koe koe 💖";
    let index = 0;

    // Typing animation for the letter
    function typeLetter() {
        if (index < message.length) {
            letterText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    // Envelope flap and letter opening animation
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("flap");
        if (envelope.classList.contains("flap")) {
            setTimeout(typeLetter, 1500);
        }
    });

    // Heart hover effect
    heart.addEventListener("mouseover", function () {
        heart.style.transform = "scale(1.2)";
    });

    heart.addEventListener("mouseleave", function () {
        heart.style.transform = "scale(1)";
    });

    // Confetti effect when the envelope is opened
    envelope.addEventListener("click", function () {
        if (envelope.classList.contains("flap")) {
            createConfetti();
        }
    });

    // Create confetti
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

    // Create floating hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");

        const colors = ["#D70040", "#FFFFFF", "#FFD700"];
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];

        heart.style.setProperty("--heart-color", heart.style.background);
        return heart;
    }

    // Position floating hearts
    function positionHearts() {
        const numHearts = 100;
        for (let i = 0; i < numHearts; i++) {
            const heart = createHeart();
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * -50}%`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            document.querySelector(".background-hearts").appendChild(heart);
        }
    }

    // Place background images in a grid
    function placeImages() {
        const numCols = Math.floor(window.innerWidth / 140); // Columns based on image width + margin
        const numRows = Math.floor(window.innerHeight / 140); // Rows based on image height + margin
        const positions = [];

        const totalWidth = numCols * 140;
        const startX = (window.innerWidth - totalWidth) / 2;

        // Generate grid positions
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                positions.push({
                    top: row * 140 + 50,  // Offset from top
                    left: startX + col * 140  // Center images horizontally
                });
            }
        }

        // Shuffle positions randomly (Fisher-Yates Algorithm)
        for (let i = positions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [positions[i], positions[j]] = [positions[j], positions[i]];
        }

        // Place images without overlap
        const placedImages = Math.min(imageList.length, positions.length);
        for (let i = 0; i < placedImages; i++) {
            let img = document.createElement("img");
            img.src = `images/${imageList[i]}`;
            img.style.position = "absolute";
            img.style.width = "120px";
            img.style.height = "auto";
            img.style.opacity = "0.8";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
            img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

            // Assign non-overlapping position
            img.style.top = `${positions[i].top}px`;
            img.style.left = `${positions[i].left}px`;

            imageContainer.appendChild(img);
        }
    }

    // Show loading spinner
    function showLoading() {
        const loading = document.createElement("div");
        loading.classList.add("loading");
        document.body.appendChild(loading);
    }

    // Hide loading spinner
    function hideLoading() {
        const loading = document.querySelector(".loading");
        if (loading) loading.remove();
    }

    // Reset button functionality
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";
    resetButton.classList.add("reset-button");
    document.body.appendChild(resetButton);

    resetButton.addEventListener("click", () => {
        envelope.classList.remove("flap");
        letterText.innerHTML = "";
        index = 0;
    });

    // Initialize the page
    showLoading();
    setTimeout(() => {
        hideLoading();
        positionHearts();
        placeImages();
    }, 2000); // Simulate loading delay
});
