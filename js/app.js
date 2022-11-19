// ton code ici

let app = {
	invaderContainer: document.querySelector("#invader"),
	form: document.querySelector("form"),
	styles: ["plain", "empty", "light", "highlight"],

	createPixel() {
		const divPixel = document.createElement("div");
		divPixel.classList.add("pixel");
		app.invaderContainer.appendChild(divPixel);
	},
	multiplyPixel(userValue) {
		app.reset();
		for (var i = 0; i < userValue * userValue; i++) {
			app.createPixel();
		}
		// app.chooseColor();
		app.changeColor();
	},
	reset() {
		app.invaderContainer.innerHTML = "";
	},

	changeColor() {
		const pixelDivs = document.querySelectorAll(".pixel");

		document.getElementById("plain").onclick = function () {
			for (const pixelDiv of pixelDivs) {
				pixelDiv.addEventListener("click", function () {
					pixelDiv.classList.remove("plain", "empty", "light", "highlight");
					pixelDiv.classList.add("plain");
				});
			}
		};
		document.getElementById("empty").onclick = function () {
			for (const pixelDiv of pixelDivs) {
				pixelDiv.addEventListener("click", function () {
					pixelDiv.classList.remove("plain", "empty", "light", "highlight");
					pixelDiv.classList.add("empty");
				});
			}
		};
		document.getElementById("light").onclick = function () {
			for (const pixelDiv of pixelDivs) {
				pixelDiv.addEventListener("click", function () {
					pixelDiv.classList.remove("plain", "empty", "light", "highlight");
					pixelDiv.classList.add("light");
				});
			}
		};
		document.getElementById("highlight").onclick = function () {
			for (const pixelDiv of pixelDivs) {
				pixelDiv.addEventListener("click", function () {
					pixelDiv.classList.remove("plain", "empty", "light", "highlight");
					pixelDiv.classList.add("highlight");
				});
			}
		};
	},
	// chooseColor() {
	// 	const colors = document.querySelectorAll(".cercle");
	// 	for (const couleur of colors) {
	// 		couleur.addEventListener("click", function () {
	// 			console.log(couleur);
	// 			couleur.classList.toggle("cercleSelected");
	// 		});
	// 	}
	// },

	grilleValue(e) {
		e.preventDefault();
		let userValue = e.target[0].value;
		parseInt(userValue, 10);
		if (userValue > 100) {
			return alert("Taille de grille entre 1 et 100, ("+ userValue +") est trop grand !");
		}
		app.invaderContainer.style.setProperty("--grid-cols", userValue);
		app.invaderContainer.style.setProperty("--grid-rows", userValue);
		app.multiplyPixel(userValue);
	},
	pixelValue(e) {
		e.preventDefault();
		console.log(e.target[1].value);
		let pixelValue = e.target[1].value;
		parseInt(pixelValue, 10);
		if (pixelValue < 10) {
			return alert("Taille de pixel est inferieur à 10 pixel, ("+ pixelValue +"pixel) est trop petit !");
		}
		var brigitte = document.querySelectorAll(".pixel");
		for (const pixel of brigitte) {
			pixel.style.setProperty("--size", `${pixelValue}px`);
		}
	},

	inputConfig() {
		const grilleInput = document.createElement("input");
		grilleInput.setAttribute("type", "text");
		grilleInput.setAttribute("placeholder", "Taille de la grille");
		grilleInput.setAttribute("name", "grilleInput");
		grilleInput.setAttribute("required", "");
		grilleInput.classList.add("grille-input");
		app.form.appendChild(grilleInput);

		const pixelInput = document.createElement("input");
		pixelInput.setAttribute("type", "text");
		pixelInput.setAttribute("placeholder", "Taille des pixels");
		pixelInput.setAttribute("name", "pixelInput");
		pixelInput.setAttribute("required", "");
		pixelInput.classList.add("pixel-input");
		app.form.appendChild(pixelInput);

		const validerInput = document.createElement("input");
		validerInput.setAttribute("type", "submit");
		validerInput.setAttribute("value", "Valider");
		validerInput.classList.add("valider-input");
		app.form.appendChild(validerInput);

		app.form.addEventListener("submit", app.grilleValue);
		app.form.addEventListener("submit", app.pixelValue);
	},

	init() {
		app.multiplyPixel(8);
		app.inputConfig();
	},
};

app.init();
