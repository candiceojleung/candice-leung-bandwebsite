const comments = [
  {
    name: "Victor Pinto",
    date: new Date("11/02/2023"),
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

  },
  {
    name: "Christina Cabrera",
    date: new Date("10/28/2023"),
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: new Date("10/20/2023"),
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// const date = new Date("08/14/2024");
// console.log(date.toLocaleDateString()); // output: '8/14/2024'


const formComment = document.getElementById("form");

for (const commentObj of comments) {
  const comment = document.createElement("div");
  comment.classList.add ("comment__item");

// const avatar=document.createElement("img"); 
// avatar.classList.add ("comment__avatar"); 
// comment.append("avatar");

// const divider=document.createElement('div');
// divider.classList.add ("divider");

const commentName=document.createElement("p");
commentName.classList.add("comment__name");
commentName.innerHTML= commentObj.name;
comment.append(commentName);

const commentText=document.createElement("p");
commentText.classList.add("comment__text");
commentText.innerHTML= commentObj.comment;
comment.append(commentText);

const commentDate=document.createElement("p");
commentDate.classList.add("comment__date"); 
commentDate.innerHTML= commentObj.date; 
comment.append(commentDate);

formComment.append(comment);
};




// formComment.addEventListener("submit", (e) => {
//     e.preventDefault();
// };