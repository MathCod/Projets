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

// Générer les "dots" dynamiquement
const dotsContainer = document.querySelector('.dots');

slides.forEach((_, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('dot_selected');

	dot.addEventListener('click', () => {
		currentIndex = index;
		showSlide(currentIndex);
	});

	dotsContainer.appendChild(dot);
});

// quelle image est affichée actuellement
let currentIndex = 0;

// toutes les variables générales
const images = document.querySelectorAll('.banner-img');
const text = document.querySelector('#banner p');
const dots = dotsContainer.querySelectorAll('.dot');
const flecheDroite = document.querySelector("#banner .arrow_right")
const flecheGauche = document.querySelector("#banner .arrow_left")

// Affiche la slide en fonction de l'index
function showSlide(index) {
	images[0].src = "./assets/images/slideshow/" + slides[index].image;

	// Change le texte
	text.innerHTML = slides[index].tagLine;

	// Met à jour les bullets
	dots.forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index);
	});
}

// Navigation avec les flèches avec condition
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