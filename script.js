document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const backgroundHearts = document.querySelector(".background-hearts");

    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg",
        "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg"
    ];

    // Typing Effect
    let message = "ကခဂဃင , Your koe koe 💖";
    let index = 0;

    function typeLetter() {
        if (letterText && index < message.length) {
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
            playSound(); // Play envelope opening sound (optional)
            createConfetti();
        }
    });

    // Play sound effect (optional)
    function playSound() {
        let sound = new Audio("pop.mp3"); // Ensure pop.mp3 exists in the project folder
        sound.play();
    }

    // Heart Hover Effect
    heart.addEventListener("mouseover", function () {
        heart.style.transform = "scale(1.2)";
    });

    heart.addEventListener("mouseleave", function () {
        heart.style.transform = "scale(1)";
    });

    // Confetti Effect
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

    // Function to create floating hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");

        const colors = ["#D70040", "#FFFFFF", "#FFD700"]; // Red, White, Gold
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];

        return heart;
    }

    function positionHearts() {
        const numHearts = 50;
        for (let i = 0; i < numHearts; i++) {
            const heart = createHeart();
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * -50}%`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            backgroundHearts.appendChild(heart);
        }
    }

    // Function to place images randomly
    function placeImages() {
        imageList.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = `image/${imgSrc}`;
            img.style.top = `${Math.random() * 90}vh`;
            img.style.left = `${Math.random() * 90}vw`;
            img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
            imageContainer.appendChild(img);
        });
    }

    positionHearts();
    placeImages();
});
