/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ------------------Services Modal --------------------

const modalViews = document.querySelectorAll(".services__modal"),
	modalBtns = document.querySelectorAll(".services__button"),
	modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
	modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
	mb.addEventListener("click", () => {
		modal(i);
	});
});

modalClose.forEach((mc) => {
	mc.addEventListener("click", () => {
		modalViews.forEach((mv) => {
			mv.classList.remove("active-modal");
		});
	});
});

// ========================== MIXITUP PORTFOLIO
let mixerPortfolio = mixitup(".work__container", {
	selectors: {
		target: ".work__card",
	},
	animation: {
		duration: 300,
	},
});

//================================  Link Active work ====================

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
	linkWork.forEach((l) => l.classList.remove("active-work"));

	this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// Swiper TEstimonial


// ================== Scroll Sections Active Link=================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// ===================== FAQ =======================
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// ===================== Light Dark Theme =======================

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		lightTheme
	);
	themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the light / icon theme
	document.body.classList.toggle(lightTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

//============ Scroll Reveal Animation ===============

const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
	// reset: true,
});

sr.reveal(`.home__data`);

sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: "bottom" });
