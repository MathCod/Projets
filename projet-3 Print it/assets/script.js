const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// quelle image est affichée actuellement
let currentIndex = 0;

const images = document.querySelectorAll('.banner-img');
const text = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');
const flecheDroite = document.querySelector("#banner .arrow_right")
const flecheGauche = document.querySelector("#banner .arrow_left")

// Affiche la slide en fonction de l'index
function showSlide(index) {
	// Cache toutes les images
	images.forEach((img, i) => {
		img.classList.remove('active');
		if (i === index) img.classList.add('active');
	});

	// Change le texte
	text.innerHTML = slides[index].tagLine;

	// Met à jour les bullets
	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index);
	});
}

// Navigation avec les flèches
flecheDroite.addEventListener("click", () => {
	if (currentIndex === slides.length - 1) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
	showSlide(currentIndex);
});

flecheGauche.addEventListener("click", () => {
	if (currentIndex === 0) {
		currentIndex = slides.length - 1;
	} else {
		currentIndex--;
	}
	showSlide(currentIndex);
});

// Dots cliquables
dots.forEach((dot, i) => {
	dot.addEventListener('click', () => {
		currentIndex = i;
		showSlide(currentIndex);
	});
});

// Initialisation
showSlide(currentIndex);