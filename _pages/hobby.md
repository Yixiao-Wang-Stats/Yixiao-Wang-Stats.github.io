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
.section-title {
    text-align: center;
    font-size: 2em;
    margin: 40px 0 20px;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.gallery-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 300px;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

.gallery-item p {
    font-size: 0.9em;
    color: #555;
    margin: 0;
}

.long-rectangle {
    max-width: 400px; /* Larger width for long rectangles */
}

.square {
    max-width: 200px; /* Square size */
}
</style>

<div class="hero">
  <div class="overlay">
    <h1>Welcome to My Art World!</h1>
    <p>Explore my creative journey, from Origami to Digital Masterpieces.</p>
  </div>
</div>

## Origami
<div class="gallery">
    <!-- Long Rectangles -->
    <div class="gallery-item long-rectangle">
        <img src="/images/origami-rectangle1.jpg" alt="Origami Piece 1">
        <p>Description for Origami Piece 1</p>
    </div>
    <div class="gallery-item long-rectangle">
        <img src="/images/origami-rectangle2.jpg" alt="Origami Piece 2">
        <p>Description for Origami Piece 2</p>
    </div>
    <!-- Squares -->
    <div class="gallery-item square">
        <img src="/images/origami-square1.jpg" alt="Origami Piece 3">
        <p>Description for Origami Piece 3</p>
    </div>
    <div class="gallery-item square">
        <img src="/images/origami-square2.jpg" alt="Origami Piece 4">
        <p>Description for Origami Piece 4</p>
    </div>
    <div class="gallery-item square">
        <img src="/images/origami-square3.jpg" alt="Origami Piece 5">
        <p>Description for Origami Piece 5</p>
    </div>
</div>

## Digital Art
<div class="gallery">
    <!-- Digital Art: Left and Right -->
    <div class="gallery-item">
        <img src="/images/digital-art1.jpg" alt="Digital Art 1">
        <p>Description for Digital Art 1</p>
    </div>
    <div class="gallery-item">
        <img src="/images/digital-art2.jpg" alt="Digital Art 2">
        <p>Description for Digital Art 2</p>
    </div>
</div>

## Others
<div class="gallery">
    <!-- Others: Left and Right -->
    <div class="gallery-item">
        <img src="/images/other-art1.jpg" alt="Other Art 1">
        <p>Description for Other Art 1</p>
    </div>
    <div class="gallery-item">
        <img src="/images/other-art2.jpg" alt="Other Art 2">
        <p>Description for Other Art 2</p>
    </div>
</div>
