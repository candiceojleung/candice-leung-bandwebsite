const API_KEY = "a28c14d5-28a2-499e-a03a-065fb3390cad";
const bandSiteApi = new BandSiteApi(API_KEY);
console.log(bandSiteApi);


let shows= new Array();
async function get() {
  try {
    shows = await bandSiteApi.getShows();
    console.log(shows);
    createShows();
  } catch (error) {
    console.log(error);
  }
}
get();


// const shows = [
//   {
//     date: "Mon Sept 09 2024",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 17 2024",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Oct 12 2024",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 16 2024",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 29 2024",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 18 2024",
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

//for-of loop to display showdates
const list = document.getElementById("show-list");

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
