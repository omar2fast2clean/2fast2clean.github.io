const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Fade in animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".section, .card").forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});

function copyEmailAndOpen() {
	const email = "yourbusiness@email.com";

	navigator.clipboard.writeText(email)
		.then(() => {
			alert("Our email address has been copied to your clipboard!");

			window.location.href =
				"mailto:" + email +
				"?subject=Cleaning Service Quote Request";
		})
		.catch(() => {
			alert("Email copied failed, but opening email app.");

			window.location.href =
				"mailto:" + email +
				"?subject=Cleaning Service Quote Request";
		});
}
