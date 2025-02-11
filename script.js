document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg",
        "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg", "zhuzhu9.jpg",
        "zhuzhu10.jpg","zhuzhu11.jpg","zhuzhu12.jpg",
        "zhuzhu13.jpg","zhuzhu14.jpg","zhuzhu15.jpg",
        "zhuzhu16.jpg","zhuzhu17.jpg","zhuzhu18.jpg",
        "zhuzhu19.jpg","zhuzhu20.jpg","zhuzhu21.jpg",
        "zhuzhu22.jpg","zhuzhu23.jpg","zhuzhu24.jpg",
        "zhuzhu25.jpg",
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

    // Function to place images randomly
    function placeImages() {
        const cols = Math.floor(window.innerWidth / 150); // Adjust grid columns dynamically
        const rows = Math.floor(window.innerHeight / 150); // Adjust grid rows dynamically
        const imageSize = 120;
        const padding = 20;
        let positions = [];

        for (let i = 0; i < rows * cols; i++) {
            positions.push(i);
        }

        imageList.forEach((imgSrc) => {
            if (positions.length === 0) return; // Stop if grid is full

            let randomIndex = Math.floor(Math.random() * positions.length);
            let position = positions.splice(randomIndex, 1)[0];

            let row = Math.floor(position / cols);
            let col = position % cols;

            let img = document.createElement("img");
            img.src = `image/${imgSrc}`;
            img.style.position = "absolute";
            img.style.width = `${imageSize}px`;
            img.style.height = "auto";
            img.style.opacity = "0.8";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";

            img.style.left = `${col * (imageSize + padding)}px`;
            img.style.top = `${row * (imageSize + padding)}px`;
            img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

            imageContainer.appendChild(img);
        });
    }

    positionHearts(); 
    placeImages(); 
});
