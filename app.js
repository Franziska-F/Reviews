const reviews = [
  {
    id: 1,
    person: "johnny weissmueller",
    job: "The Pretty",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jonny_Weissmuller_1924.jpg/440px-Jonny_Weissmuller_1924.jpg",
    text: `Es war, als hätte der Himmel die Erde still geküsst, so dass sie
              nun im Blütenschimmer von ihm träumen müsst. Der Wind ging durch
              die Felder, die Ähren wogten sacht, es rauschten leis die Wälder,
              so sternklar war die Nacht. Und meine Seele spannte weit ihre
              Flügel aus, flog über stille Lande, als flöge sie nach Haus.`,
  },
  {
    id: 2,
    person: "frida kahlo",
    job: "The Painter",
    img: "https://artinwords.de/wp-content/uploads/frida-kahlo/kahlo_selbst_hals-e1532966903143.jpg",
    text: `Es war, als hätte der Himmel die Erde still geküsst, so dass sie
              nun im Blütenschimmer von ihm träumen müsst. Der Wind ging durch
              die Felder, die Ähren wogten sacht, es rauschten leis die Wälder,
              so sternklar war die Nacht. Und meine Seele spannte weit ihre
              Flügel aus, flog über stille Lande, als flöge sie nach Haus.`,
  },
  {
    id: 3,
    person: "Doris Lessing",
    job: "The Thinker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9_4bIblAbyD5ONQEgwVjh-WaWEm-MdfH1iGx7hYAmbuMhyzHyABjXfeTodLUR3rHn0s&usqp=CAU",
    text: `Es war, als hätte der Himmel die Erde still geküsst, so dass sie
              nun im Blütenschimmer von ihm träumen müsst. Der Wind ging durch
              die Felder, die Ähren wogten sacht, es rauschten leis die Wälder,
              so sternklar war die Nacht. Und meine Seele spannte weit ihre
              Flügel aus, flog über stille Lande, als flöge sie nach Haus.`,
  },
  {
    id: 4,
    person: "Edgar Alan Poe",
    job: "The Writer",
    img: "https://www.phantastik-couch.de/fileadmin/user_upload/PC-Edgar-Allan-Poe-1.jpg",
    text: `Es war, als hätte der Himmel die Erde still geküsst, so dass sie
              nun im Blütenschimmer von ihm träumen müsst. Der Wind ging durch
              die Felder, die Ähren wogten sacht, es rauschten leis die Wälder,
              so sternklar war die Nacht. Und meine Seele spannte weit ihre
              Flügel aus, flog über stille Lande, als flöge sie nach Haus.`,
  },
];

// select items

const personImg = document.getElementById("person-img");
const person = document.getElementById("name");
const job = document.getElementById("job");
const para = document.getElementById("review-para");

const btnRight = document.querySelector(".arrow-right");

const btnLeft = document.querySelector(".arrow-left");

const btnSurprise = document.querySelector(".surprise-btn");

// set staring item

let currentItem = 2; //first item in array, is global var and all the functions below accsess it

// load inital item

window.addEventListener("DOMContentLoaded", displayData()); //DOMContentLoaded is eventlistener

function displayData() {
  const item = reviews[currentItem]; //assign array access to const for easyer use
  personImg.src = item.img;
  person.textContent = item.person;
  job.textContent = item.job;
  para.textContent = item.text;
}

//show next person

btnRight.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  displayData();
});

btnLeft.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  displayData();
});

// random Number for suprpise me button

btnSurprise.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);

  displayData();
});
