// Array of course titles
let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// Function to log each course title from the array
function courseArr(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Call the function to log courses
courseArr(myCourses);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Store a value in localStorage
localStorage.setItem("refresh", true);

// Retrieve and log the stored value
console.log(localStorage.getItem("refresh"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array of player scores
let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Get the button element for logging Jane's score
const janeBtn = document.getElementById("jane-btn");
janeBtn.addEventListener("click", () => {
  console.log(data[0].score); // Log Jane's score when the button is clicked
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to generate a sentence describing a list of items
function generateSentences(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `;
  let lastIndex = arr.length - 1; // Index of the last element

  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i]; // Add the last item without a comma
    } else {
      baseString += arr[i] + ", "; // Add items with commas
    }
  }

  console.log(baseString); // Log the complete sentence
}

// Call the function with different arguments
generateSentences("Largest countries", ["China", "India", "USA"]);
generateSentences("Best Fruits", ["Apples", "Bananas"]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get the container element for displaying images
let container = document.getElementById("container");

// Array of image sources
const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

// Function to render images into the container
function renderImages(images) {
  let imgsDOM = ""; // String to hold image elements
  for (let i = 0; i < images.length; i++) {
    imgsDOM += `<img alt="Employee in the company" class="team-img" src="${images[i]}">`; // Create img elements
  }
  container.innerHTML = imgsDOM; // Set inner HTML of container to the img elements
}

// Call the function to render images
renderImages(imgs);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Total price as a string
const totalPrice = "420.69235632455";
// Get the button element for purchasing
const btn = document.getElementById("purchase-btn");
// Set button text content to show formatted price
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`; // Format the price to two decimal places
