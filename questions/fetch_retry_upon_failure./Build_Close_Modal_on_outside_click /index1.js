// select the open modal button
const openModalBtn = document.querySelector("#myBtn");

// select the close icon
const closeIcon = document.querySelector(".close-icon");

// Select the modal
const modal = document.querySelector(".modal");

// now -lets add event listener to the open modal button and make the visible the modal when clicked
openModalBtn.addEventListener("click", () => {
	modal.style.visibility = "visible";
});

// now -lets add event listener to the close icon and make the modal invisible when clicked
closeIcon.addEventListener("click", (e) => {
	e.stopPropagation();
	modal.style.visibility = "hidden";
});
// Close Modal on ESC Keydown
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		modal.style.visibility = "hidden";
	}
});

// Close Modal on outside click
modal.addEventListener("click", (e) => {
	console.log(e.target);
	console.log(e.currentTarget);
	if (e.target === e.currentTarget) {
		modal.style.visibility = "hidden";
	}
});
