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

// const date = new Date("08/14/2024");
// console.log(date.toLocaleDateString()); // output: '8/14/2024'

// const dateToday = new Date();
// const day= dateToday.getDay();
// const month=dateToday.getMonth();
// const year=dateToday.getYear();
// console.log(dateToday);



const formComment = document.getElementById("comment-section");

for (const commentObj of comments) {
  const comment = document.createElement("div");
  comment.classList.add ("comment__item");


const avatar=document.createElement('div');
avatar.classList.add ("comment__avatar");
avatar.textContent=" ";
comment.append(avatar);
 
const text =document.createElement('div');
text.classList.add('comment__context');
comment.append(text);

const info=document.createElement("div");
info.classList.add("comment__info");
text.append(info);

const commentName=document.createElement("p");
commentName.classList.add("comment__name");
commentName.textContent= commentObj.name;
info.append(commentName);

const commentDate=document.createElement("p");
commentDate.classList.add("comment__date"); 
commentDate.textContent= commentObj.date; 
info.append(commentDate);

const commentText=document.createElement("p");
commentText.classList.add("comment__text");
commentText.textContent= commentObj.comment;
text.append(commentText);

formComment.prepend(comment);
};




// formComment.addEventListener("submit", (e) => {
//     e.preventDefault();
// };