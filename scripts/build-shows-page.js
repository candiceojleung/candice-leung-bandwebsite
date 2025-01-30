const shows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const list = document.getElementById("show-list");

for (const showObj of shows) {
  const show = document.createElement("div");
  show.classList.add("show__item");

  const showDate = document.createElement("div");
  showDate.classList.add("show__header");
  showDate.textContent = "Date";
  show.append(showDate);

  const dateInfo = document.createElement("p");
  dateInfo.classList.add("show__info--bold");
  dateInfo.textContent = showObj.date;
  show.append(dateInfo);

  const showVenue = document.createElement("div");
  showVenue.classList.add("show__header");
  showVenue.textContent = "Venue";
  show.append(showVenue);

  const venueInfo = document.createElement("p");
  venueInfo.classList.add("show__info");
  venueInfo.textContent = showObj.venue;
  show.append(venueInfo);

  const showLocation = document.createElement("div");
  showLocation.classList.add("show__header");
  showLocation.textContent = "Location";
  show.append(showLocation);

  const locationInfo = document.createElement("p");
  locationInfo.classList.add("show__info");
  locationInfo.textContent = showObj.location;
  show.append(locationInfo);

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "buy tickets";
  show.append(button);

  list.append(show);
}

list.addEventListener("click", (e) => {
  const el = e.target.closest(".show__item");

  if (!el) {
    return;
  }
  const activeClass = "show__item--active";
  const active = list.querySelector(`.${activeClass}`);
  if (active) {
    active.classList.remove(activeClass);
  }
  el.classList.add(activeClass);
});
