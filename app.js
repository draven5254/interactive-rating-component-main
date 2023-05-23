"use strict";

// // Select all the buttons
// const buttons = document.querySelectorAll(".btn");
// const backBtn = document.querySelector(".btn-submit");

// // Add a click event listener to each button
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Remove the 'selected' class from all buttons
//     buttons.forEach((button) => {
//       button.classList.remove("selected");
//     });

//     // Add the 'selected' class to the clicked button
//     button.classList.add("selected");
//   });
// });

// // Select the submit button
// const submitButton = document.querySelector(".btn-submit");

// // Add a click event listener to the submit button
// submitButton.addEventListener("click", () => {
//   // Get the selected button
//   const selectedButton = document.querySelector(".selected");

//   // Get the rating value (1-5)
//   const ratingValue = selectedButton.textContent;

//   // Hide the rating state
//   const ratingState = document.querySelector(".main-container");
//   ratingState.classList.add("hidden");

//   // Show the thank you state
//   const thankYouState = document.querySelector(".thank-you");
//   thankYouState.classList.remove("hidden");

//   // Update the rating value in the thank you state
//   const ratingElement = document.querySelector(".gray");
//   ratingElement.innerHTML = `You selected ${ratingValue} out of 5`;
// });

const mainConainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  mainConainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  mainConainer.style.display = "block";
  thankYou.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
