"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

const openWindow = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeWindow = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener("click", openWindow);
}

btnCloseModal.addEventListener(`click`, closeWindow);
overlay.addEventListener(`click`, closeWindow);

document.addEventListener(`keydown`, function (e) {
	// console.log(e.key);

	if (e.key === `Escape`) {
		closeWindow();
	}
});
