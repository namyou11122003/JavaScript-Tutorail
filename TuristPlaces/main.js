import { turistPlaces } from "./data.js";
import searchFilter from "./searchFilter.js";
import { displayPlaces, displayButton } from "./display.js";

document.addEventListener("DOMContentLoaded", () => {
  displayPlaces(turistPlaces);
  displayButton();
  searchFilter();
});
