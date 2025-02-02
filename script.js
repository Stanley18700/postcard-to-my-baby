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

    function placeImages() {
        imageList.forEach(imgSrc => {
            let img = document.createElement("img");
            img.src = `images/${imgSrc}`;
            img.style.top = `${Math.random() * 80 + 10}vh`;
            img.style.left = `${Math.random() * 80 + 10}vw`;
            img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
            imageContainer.appendChild(img);
        });
    }

    placeImages();
});
