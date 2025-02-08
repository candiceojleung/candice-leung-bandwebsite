import { BandSiteApi } from "./band-site-api.js";

const API_KEY = "36814136-3740-4923-8812-8c4b91f868ae";
const bandSiteApi = new BandSiteApi(API_KEY);

let comments = await bandSiteApi.getComments();

async function likedCommentEl(commentId, likeCount) {
  try {
    const likedComment = await bandSiteApi.likeComment(commentId);
    if (likedComment && likedComment.likes !== undefined) {
      likeCount.textContent = ` (${likedComment.likes})`;
    }
  } catch (error) {
    console.log(error);
  }
}

async function deletedCommentEl(commentId) {
  try {
    await bandSiteApi.deleteComment(commentId);
    comments = await bandSiteApi.getComments();
    renderAllComments(comments);
  } catch (error) {
    console.log(error);
  }
}

//function to create comment
const formEl = document.getElementById("form");
const commentsEl = document.getElementById("commentSection");

function createCommentElement(comment) {
  const commentSect = createDiv("comment__row");
  commentsEl.append(commentSect);

  const commentImage = createDiv("comment__image");
  commentSect.append(commentImage);

  const commentContainer = createDiv("comment__container");
  commentSect.append(commentContainer);

  const commentItem = createDiv("comment__item");
  commentContainer.append(commentItem);

  const nameEl = createP("comment__name", comment.name);
  commentItem.append(nameEl);

  const timeDate = new Date(comment.timestamp);
  const dateEl = createP("comment__date", formatDate(timeDate));
  commentItem.append(dateEl);

  const commentEl = createP("comment__text", comment.comment);
  commentContainer.append(commentEl);

  const commentAction = createDiv("comment__actions");
  commentContainer.append(commentAction);

  const likeButton = createButton("comment__like", "");
  commentAction.append(likeButton);

  const imgLike = createImage ("comment__img","../assets/icons/SVG/icon-like.svg","thumbs-up")
  likeButton.append(imgLike);

  const likeCount = createP("comment__number", ` (${comment.likes || 0})`);
  likeButton.append(likeCount);

  likeButton.addEventListener("click", () => {
    likedCommentEl(comment.id, likeCount);
  });

  const deleteButton = createButton("comment__delete", "");
  commentAction.append(deleteButton);

  const imgDelete = createImage("comment__img","assets/icons/SVG/icon-delete.svg", "trash-can")
  deleteButton.append(imgDelete);

  deleteButton.addEventListener("click", () => {
    deletedCommentEl(comment.id);
  });

  return commentSect;
}

renderAllComments(comments);

//functions to create div, button, p and img tags for the comment section
function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function createP(className, text = "") {
  const p = document.createElement("p");
  p.className = className;
  p.textContent = text;
  return p;
}

function createButton(className, text = "") {
  const button = document.createElement("button");
  button.className = className;
  button.innerHTML = text;
  return button;
}

function createImage(className, src, alt) {
  const img = document.createElement("img");
  img.className = className;
  img.src = src;
  img.alt = alt;
  return img;
}

//function to show all comments
function renderAllComments(comments) {
  commentsEl.innerHTML = "";
  for (let i = 0; i < comments.length; i++) {
    createCommentElement(comments[i]);
  }
}

//function to create dynamic time-stamps
function formatDate(d1) {
  const current = new Date();
  const msDiff = current.getTime() - d1.getTime();
  const secDiff = msDiff / 1000;
  const minsDiff = secDiff / 60;
  const hoursDiff = minsDiff / 60;
  const daysDiff = hoursDiff / 24;

  if (msDiff < 0) {
    return `${Math.floor(secDiff)} seconds ago`;
  } else if (secDiff < 60) {
    return `${Math.floor(secDiff)} seconds ago`;
  } else if (minsDiff < 60) {
    return `${Math.floor(minsDiff)} minutes ago`;
  } else if (hoursDiff < 24) {
    return `${Math.floor(hoursDiff)} hours ago`;
  } else if (daysDiff < 30) {
    return `${Math.floor(daysDiff)} days ago`;
  } else {
    return `${Math.floor(daysDiff / 30)} months ago`;
  }
}

//event listener to add new comments while validating form so that an errror state occurs when form fields are empty
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameField = document.getElementById("formName");
  const commentField = document.getElementById("formComment");
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
  } else {
    const newComment = {
      name: e.target.formName.value,
      comment: e.target.formComment.value,
    };

    await bandSiteApi.postComment(newComment);
    comments = await bandSiteApi.getComments();
    renderAllComments(comments);
    formEl.reset();
  }
});
