// local reviews data

const reviews = [
    {
        id: 1,
        name: "Micheal Leonel",
        job: "Web developer",
        img: "./1594668408164.jpg",
        text: "A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Node.js, Go or Java in the server, and http for communications between client and server. A web developer may specialize in client-side applications.",
    },
    {
        id: 2,
        name: "Buster Arslan",
        job: "Front end",
        img: "./photo-1507003211169-0a1dd7228f2d.jfif",
        text: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing..",
    },
    {
        id: 3,
        name: "Sabella Voula",
        job: "UX/UI",
        img: "./photo-1494790108377-be9c29b29330.jfif",
        text: "User interface and user experience design is a high-demand field, but the skills and knowledge you will learn in this Specialization are applicable to a wide variety of careers, from marketing to web design to human-computer interaction.",
    },
    {
        id: 4,
        name: "Hersilia Danica",
        job: "Full stack developer",
        img: "./portrait-happy-young-woman-looking-camera_23-2147892777.jpg",
        text: "A full stack developer is someone who works with both the front end and back end of a web application."
    }
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show next person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
});