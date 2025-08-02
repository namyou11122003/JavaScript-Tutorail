import { turistPlaces } from "./data.js";
import { displayPlaces } from "./display.js";

export default function () {
  const input = document.querySelector(".input");
  input.addEventListener("keyup", () => {
    const inputValue = input.value.toLowerCase();
    const filterArray = turistPlaces.filter((item) => {
      return item.title.toLocaleLowerCase().includes(inputValue);
    });
    displayPlaces(filterArray);
  });
}
