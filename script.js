document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const backgroundHearts = document.querySelector(".background-hearts");

    // Image List
    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg",
        "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg"
    ];

    // 💌 Typing Effect
    let message = "ကခဂဃင ,Your koe koe 💖";
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            letterText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    // 💌 Envelope Click Event
    envelope.addEventListener("click", () => {
        envelope.classList.toggle("flap");
        if (envelope.classList.contains("flap")) {
            setTimeout(typeLetter, 1500);
            createConfetti();
        }
    });

    // 💖 Heart Hover Effect
    heart.addEventListener("mouseover", function () {
        heart.style.transform = "scale(1.2)";
    });

    heart.addEventListener("mouseleave", function () {
        heart.style.transform = "scale(1)";
    });

    // 🎊 Confetti Effect
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

    // ❤️ Function to Create a Heart
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");

        const colors = ["#D70040", "#FFFFFF", "#FFD700"]; // Red, White, Gold
        heart.style.background = colors[Math.floor(Math.random() * colors.length)];

        heart.style.setProperty("--heart-color", heart.style.background);
        return heart;
    }

    // ❤️ Function to Position Falling Hearts
    function positionHearts() {
        const numHearts = 100;
        for (let i = 0; i < numHearts; i++) {
            const heart = createHeart();
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * -50}%`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            backgroundHearts.appendChild(heart);
        }
    }

    // 📸 Function to Place Background Images
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

    // Call Functions
    positionHearts(); // ❤️ Floating Hearts
    placeImages(); // 📸 Scattered Images
});
