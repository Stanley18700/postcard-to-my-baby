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
        "zhuzhu25.jpg",
    ];

    function isOverlapping(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return !(
            rect1.top > rect2.bottom ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right ||
            rect1.right < rect2.left
        );
    }

    let message = "ကခဂဃင ,Your koe koe 💖";
    let index = 0;

    function typeLetter() {
        if (index < message.length) {
            letterText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("flap");
        if (envelope.classList.contains("flap")) {
            setTimeout(typeLetter, 1500);
        }
    });

    heart.addEventListener("mouseover", function () {
        heart.style.transform = "scale(1.2)";
    });

    heart.addEventListener("mouseleave", function () {
        heart.style.transform = "scale(1)";
    });

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

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-shape");

        const colors = ["#D70040", "#FFFFFF", "#FFD700"];
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

    function placeImages() {
        const placedImages = [];

        imageList.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = `images/${imgSrc}`;
            img.style.position = "absolute";
            img.style.width = "120px";
            img.style.height = "auto";
            img.style.opacity = "0.8";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";

            let overlap;
            let attempts = 0;
            const maxAttempts = 100;

            do {
                overlap = false;
                img.style.top = `${Math.random() * (window.innerHeight - 200) + 100}px`;
                img.style.left = `${Math.random() * (window.innerWidth - 120)}px`;
                img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

                for (const placedImg of placedImages) {
                    if (isOverlapping(img, placedImg)) {
                        overlap = true;
                        break;
                    }
                }

                attempts++;
            } while (overlap && attempts < maxAttempts);

            if (!overlap) {
                imageContainer.appendChild(img);
                placedImages.push(img);
            }
        });
    }

    positionHearts();
    placeImages();
});
