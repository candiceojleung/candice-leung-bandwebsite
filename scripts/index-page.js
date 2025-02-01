const comments = [
  {
    name: "Isaac Tadesse",
    date: new Date("10/20/2023"),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Christina Cabrera",
    date: new Date("10/28/2023"),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Victor Pinto",
    date: new Date("11/02/2023"),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

const formEl = document.getElementById("form");
const commentsEl = document.getElementById("commentSection");

function displayComments() {
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    console.log(comment);

    const commentSect = document.createElement("div");
    commentSect.classList.add("comment__row");
    commentsEl.prepend(commentSect);

    const commentImage = document.createElement("div");
    commentImage.classList.add("comment__image");
    commentSect.append(commentImage);

    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment__container");
    commentSect.append(commentContainer);

    const commentItem = document.createElement("div");
    commentItem.classList.add("comment__item");
    commentContainer.append(commentItem);

    const nameEl = document.createElement("p");
    nameEl.classList.add("comment__name");
    nameEl.textContent = comment.name;
    commentItem.append(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("comment__date");
    dateEl.textContent = formatDate(comment.date);
    commentItem.append(dateEl);

    const commentEl = document.createElement("p");
    commentEl.classList.add("comment__text");
    commentEl.textContent = comment.comment;
    commentContainer.append(commentEl);
  }
}

displayComments();

const d1 = new Date(); 
const date = formatDate(d1); 

function formatDate(d1){
  const current = new Date(); 
  const msDiff= current.getTime()-d1.getTime();  
  const secDiff= msDiff/1000;
  const minsDiff= secDiff/60; 
  const hoursDiff=minsDiff/60;
  const daysDiff=hoursDiff/24; 
  
  if (secDiff < 60) {
    return `${Math.floor(secDiff)} seconds ago`;
  } else if (minsDiff < 60) {
    return `${Math.floor(minsDiff)} minutes ago`;
  } else if (hoursDiff < 24) {
    return `${Math.floor(hoursDiff)} hours ago`;
  } else if (daysDiff < 30) {
    return `${Math.floor(daysDiff)} days ago`;
  } else  {
    return `${Math.floor(daysDiff / 30)} months ago`;
  }
};


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameField = document.getElementById('formName');
  const commentField = document.getElementById('formComment');
  let emptyField = false;

  if (nameField.value.trim() === "") {
    nameField.classList.add("error");
    emptyField = true;
  }

  if (commentField.value.trim() === "") {
    commentField.classList.add("error");
    emptyField = true;
}
if (emptyField) {

  nameField.addEventListener("input", () => {
    if (nameField.classList.contains("error")) {
      nameField.classList.remove("error");
    }
  });

  commentField.addEventListener("input", () => {
    if (commentField.classList.contains("error")) {
      commentField.classList.remove("error");
    }
  });

 return; 
}

else{
  const newComment = {
    name: e.target.formName.value,
    date:new Date(),
    comment: e.target.formComment.value
  };

  comments.push(newComment);
  commentsEl.replaceChildren();
  displayComments();

  formEl.reset();
}



});

