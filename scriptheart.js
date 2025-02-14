function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️"; // Heart emoji
    heart.classList.add("heart");

    // Randomize position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random float speed

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300); 
