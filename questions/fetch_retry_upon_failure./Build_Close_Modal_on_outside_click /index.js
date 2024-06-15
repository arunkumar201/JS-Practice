
// make the modal functional re-usable by creating a Modal class
//also can extend the fun easily by adding more methods and properties
class Modal {
	constructor(openButtonSelector, modalSelector, closeIconSelector) {
		console.log("Modal constructor called");
		this.openModalBtn = document.querySelector(openButtonSelector);
		this.modal = document.querySelector(modalSelector);
		this.closeIcon = document.querySelector(closeIconSelector);

		this.init();
	}

	init() {
		this.openModalBtn.addEventListener("click", () => this.openModal());
		this.closeIcon.addEventListener("click", (e) => this.closeModal(e));
		document.addEventListener("keydown", (e) => this.handleKeyDown(e));
		this.modal.addEventListener("click", (e) => this.handleOutsideClick(e));
	}

	openModal() {
		this.modal.style.visibility = "visible";
	}

	closeModal(e) {
		// stop the event from bubbling up
		e.stopPropagation();
		this.modal.style.visibility = "hidden";
	}

	handleKeyDown(e) {
		if (e.key === "Escape") {
			this.modal.style.visibility = "hidden";
		}
	}

	handleOutsideClick(e) {
		if (e.target === e.currentTarget) {
			this.modal.style.visibility = "hidden";
		}
	}
}

const modal = document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM loaded");
	return new Modal("#myBtn", ".modal", ".close-icon");
});
