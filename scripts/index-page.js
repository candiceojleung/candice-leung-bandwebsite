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
    dateEl.textContent = comment.date.toLocaleDateString();
    commentItem.append(dateEl);

    const commentEl = document.createElement("p");
    commentEl.classList.add("comment__comment");
    commentEl.textContent = comment.comment;
    commentContainer.append(commentEl);
  }
}

displayComments();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const newComment = {
    name: e.target.formName.value,
    date: new Date(),
    comment: e.target.formComment.value
    
  };

  comments.push(newComment);
  commentsEl.replaceChildren();
  displayComments();

  formEl.reset();
});

