document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope-wrapper");
    const letterText = document.querySelector(".text p");
    const heart = document.querySelector(".heart");
    const imageContainer = document.querySelector(".background-images");
    const imageList = [
        "zhuzhu1.jpg", "zhuzhu2.jpg", "zhuzhu3.jpg", "zhuzhu4.jpg", "zhuzhu5.jpg", "zhuzhu6.jpg",
        "zhuzhu7.jpg", "zhuzhu8.jpg", "zhuzhu9.jpg", "zhuzhu10.jpg", "zhuzhu11.jpg", "zhuzhu12.jpg",
        "zhuzhu13.jpg", "zhuzhu14.jpg", "zhuzhu15.jpg", "zhuzhu16.jpg", "zhuzhu17.jpg", "zhuzhu18.jpg",
        "zhuzhu19.jpg", "zhuzhu20.jpg", "zhuzhu21.jpg", "zhuzhu22.jpg", "zhuzhu23.jpg", "zhuzhu24.jpg",
        "zhuzhu25.jpg"
    ];

    function isOverlapping(img, placedImages) {
        const rect1 = img.getBoundingClientRect();
        return placedImages.some(placedImg => {
            const rect2 = placedImg.getBoundingClientRect();
            return !(
                rect1.top > rect2.bottom ||
                rect1.bottom < rect2.top ||
                rect1.left > rect2.right ||
                rect1.right < rect2.left
            );
        });
    }

    function placeImages() {
        const placedImages = [];
        const margin = 10;
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        const imageWidth = 120;
        let currentX = margin;
        let currentY = maxHeight - imageWidth - margin;

        imageList.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = `image/${imgSrc}`;
            img.style.position = "absolute";
            img.style.width = `${imageWidth}px`;
            img.style.height = "auto";
            img.style.opacity = "0.8";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";

            if (currentX + imageWidth > maxWidth) {
                currentX = margin;
                currentY -= imageWidth + margin;
            }

            img.style.left = `${currentX}px`;
            img.style.top = `${currentY}px`;
            
            imageContainer.appendChild(img);
            placedImages.push(img);
            currentX += imageWidth + margin;
        });
    }

    function typeLetter() {
        let message = "ကခဂဃင ,Your koe koe 💖";
        let index = 0;
        function type() {
            if (index < message.length) {
                letterText.innerHTML += message.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
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

    placeImages();
});
