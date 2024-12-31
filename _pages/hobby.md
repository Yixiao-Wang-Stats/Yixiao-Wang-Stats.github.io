---
layout: default
title: "Welcome to My Art World"
permalink: /hobby_miscellaneous/
---

<style>
/* Inline CSS for Fullscreen Hero Section and Gallery */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.hero {
    position: relative;
    height: 100vh; /* Full viewport height */
    background: url('/images/moon&star.png') no-repeat center center/cover; /* Replace with your image path */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

.hero .overlay {
    background-color: rgba(0, 0, 0, 0.8); /* Adds a dark overlay */
    padding: 20px;
    border-radius: 10px;
}

.hero h1 {
    font-size: 3em;
    margin: 0;
}

.hero p {
    font-size: 1.5em;
    margin: 0.5em 0 0;
}

/* Gallery Section */
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.origami-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Origami in 3 columns */
    gap: 20px;
    justify-items: center;
}

.gallery-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.gallery-item img {
    width: auto;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

.gallery-item p {
    font-size: 1em;
    color: #555;
    margin: 0;
}

/* Digital Art and Others are adaptive */
.digital-others-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.digital-others-gallery .gallery-item {
    flex: 1 1 calc(50% - 20px); /* 2 items per row */
    max-width: calc(50% - 20px); /* Max size for Digital Art & Others */
}

@media (max-width: 768px) {
    .origami-gallery {
        grid-template-columns: repeat(2, 1fr); /* Origami switches to 2 columns */
    }

    .digital-others-gallery .gallery-item {
        flex: 1 1 100%; /* Switch to single column for small screens */
        max-width: 100%;
    }
}
</style>

<div class="hero">
  <div class="overlay">
    <h1>Welcome to My Art World!</h1>
    <p>Explore my creative journey, from Origami to Digital Masterpieces.</p>
  </div>
</div>

## Origami
<div class="origami-gallery">
    <div class="gallery-item">
        <img src="/images/turtle.jpg" alt="Origami Piece 1">
        <p>Sea Turtle - Folded by Me, Designed by Satoshi Kamiya 1</p>
    </div>
    <div class="gallery-item">
        <img src="/images/dragon_phoenix.jpg" alt="Origami Piece 2">
        <p>Ancient Dragon & Phoenix3.5 - Folded by Me, Designed by Satoshi Kamiya</p>
    </div>
    <div class="gallery-item">
        <img src="/images/violin_girl.jpg" alt="Origami Piece 3">
        <p>Violinist -  Folded by Me, Designed by Hojyo Takashi </p>
    </div>
    <div class="gallery-item">
        <img src="/images/fox_marry.jpg" alt="Origami Piece 4">
        <p>Fox Wedding - Folded by Me, Designed by Katsuta Kyohei</p>
    </div>
    <div class="gallery-item">
        <img src="/images/t_rex.jpg" alt="Origami Piece 5">
        <p>T-Rex Origami Tutorial - Taught by Me as President of the Origami Club at USTC</p>
    </div>
    <div class="gallery-item">
        <img src="/images/angle_eagle.png" alt="Origami Piece 6">
        <p>Icarus (Designed by Hojyo Takashi) & Eagle (Designed by Nguyen Hung Cuong) </p>
    </div>
</div>

## Digital Art
<div class="digital-others-gallery">
    <div class="gallery-item">
        <img src="/images/moon&star.png" alt="Digital Art 1">
        <p>Description for Digital Art 1</p>
    </div>
    <div class="gallery-item">
        <img src="/images/thinking girl.png" alt="Digital Art 2">
        <p>Description for Digital Art 2</p>
    </div>
</div>

## Others
<div class="digital-others-gallery">
    <div class="gallery-item">
        <img src="/images/USTC.jpg" alt="Other Art 1">
        <p>Description for Other Art 1</p>
    </div>
    <div class="gallery-item">
        <img src="/images/.jpg" alt="Other Art 2">
        <p>Description for Other Art 2</p>
    </div>
</div>
