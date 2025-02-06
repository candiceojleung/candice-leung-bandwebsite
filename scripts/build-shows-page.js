import { BandSiteApi } from "./band-site-api.js";

const API_KEY = "a28c14d5-28a2-499e-a03a-065fb3390cad";
const bandSiteApi = new BandSiteApi(API_KEY);
console.log(bandSiteApi);


let shows = await bandSiteApi.getShows();
const list = document.getElementById("show-list");
createShows(shows);


function createShows(){
for (const showObj of shows) {
  const show = document.createElement("div");
  show.classList.add("show__item");

  const showDate = createDiv("show__header", "Date");
  show.append(showDate);


  const dateInfo = createP("show__info--bold", new Date(showObj.date).toDateString());
  show.append(dateInfo);

  const showVenue = createDiv("show__header", "Venue");
  show.append(showVenue);

  const venueInfo = createP("show__info", showObj.place);
  show.append(venueInfo);

  const showLocation = createDiv("show__header", "Location");
  show.append(showLocation);

  const locationInfo = createP("show__info", showObj.location);
  show.append(locationInfo);

  const button = createButton("button", "buy tickets");
  show.append(button);

  list.append(show);
}
}



//functions to create buttons, divs, and paragraph tags
function createButton(className, text = "") {
  const button = document.createElement("button");
  button.className = className;
  button.textContent = text;
  return button;
}

function createDiv(className, text = "") {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = text;
  return div;
}

function createP(className, text = "") {
  const p = document.createElement("p");
  p.className = className;
  p.textContent = text;
  return p;
}

//event listener to highlight selected show date until another date is selected
list.addEventListener("click", (e) => {
  const el = e.target.closest(".show__item");

  if (!el) {
    return;
  }
  const activeClass = "show__item--grey-background";
  const active = list.querySelector(`.${activeClass}`);
  if (active) {
    active.classList.remove(activeClass);
  }
  el.classList.add(activeClass);
});
