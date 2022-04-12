// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
//items selection
let nameDisplay = document.getElementById("author");
let jobDisplay = document.getElementById("job");
let imageDisplay = document.getElementById("person-img");
let infoDisplay = document.querySelector(".info");
let supriseButton = document.querySelector(".random-btn");
let prevButton = document.querySelector(".prev-btn");
let nextButton = document.querySelector(".next-btn");

let idToDisplay = 0;

nextButton.addEventListener("click", () => {
  idToDisplay = idToDisplay + 1;
  if (idToDisplay >= reviews.length) {
    idToDisplay = 0;
  }

  displayHandler();
});

prevButton.addEventListener("click", () => {
  idToDisplay = idToDisplay - 1;
  if (idToDisplay < 0) {
    idToDisplay = reviews.length - 1;
  }
  displayHandler();
});

displayHandler = () => {
  nameDisplay.textContent = reviews[idToDisplay].name;
  jobDisplay.textContent = reviews[idToDisplay].job;
  imageDisplay.setAttribute("src", reviews[idToDisplay].img);
  infoDisplay.textContent = reviews[idToDisplay].text;
};

supriseButton.addEventListener("click", () => {
  let randomNumber = Math.ceil(Math.random() * reviews.length-1);
  console.log(randomNumber);
  idToDisplay = randomNumber;
  displayHandler();
});
