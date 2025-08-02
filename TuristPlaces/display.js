import { turistPlaces } from "./data.js";
function displayPlaces(array) {
  const container = document.querySelector(".container");
  container.innerHTML =
    array.length > 0
      ? array
          .map((arr) => {
            const { id, img, title, description } = arr;
            return `
           <article class="card" id="place-${id}">
          <img class="img" src="${img}" alt="${title}"/>
          <h3 class="heading">${title}</h3>
          <p class="details"> ${description}</p>
        </article>
          
          `;
          })
          .join("")
      : `<p class="txt"> There's no such place</p>`;
}

function displayButton() {
  const buttonContainer = document.querySelector(".btn-container");
  const buttons = ["All", ...new Set(turistPlaces.map((item) => item.country))];
  buttonContainer.innerHTML = buttons
    .map((b) => {
      return `
      <button class="btn" data-id="${b}" >${b}</button>
      `;
    })
    .join("");

  const allButtons = document.querySelectorAll(".btn");

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = this.dataset.id;
      const filterArray = turistPlaces.filter((item) => item.country === id);
      if (id === "All") {
        displayPlaces(turistPlaces);
      } else {
        displayPlaces(filterArray);
      }
      const input = document.querySelector(".input");
      input.value = "";
    });
  });
}

export { displayPlaces, displayButton };
