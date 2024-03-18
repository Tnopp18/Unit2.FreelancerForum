// Sample arrays for possible names and occupations
var names = ["John", "Jane", "Alice", "Bob", "Emily", "David"];
var occupations = ["Developer", "Designer", "Writer", "Artist", "Translator"];

// Array to store freelancers
var freelancers = [];

// Function to generate a random freelancer
function generateRandomFreelancer() {
    var randomNameIndex = Math.floor(Math.random() * names.length);
    var randomOccupationIndex = Math.floor(Math.random() * occupations.length);
    var randomStartingPrice = Math.floor(Math.random() * 100) + 50; // Random starting price between 50 and 150

    return {
        name: names[randomNameIndex],
        occupation: occupations[randomOccupationIndex],
        startingPrice: randomStartingPrice
    };
}

// Function to render freelancers
function renderFreelancers() {
    var freelancersContainer = document.getElementById("freelancers-container");

    // Clear previous content
    freelancersContainer.innerHTML = "";

    // Iterate over the freelancers array and create HTML elements
    freelancers.forEach(function(freelancer) {
        var listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
        freelancersContainer.appendChild(listItem);
    });
}

// Function to calculate the average starting price
function calculateAverageStartingPrice() {
    var totalStartingPrice = freelancers.reduce(function(sum, freelancer) {
        return sum + freelancer.startingPrice;
    }, 0);

    return totalStartingPrice / freelancers.length;
}

// Function to update the displayed message with the average starting price
function updateDisplayedMessage() {
    var averageStartingPrice = calculateAverageStartingPrice();
    document.getElementById("average-price").textContent = "Average starting price: $" + averageStartingPrice.toFixed(2);
}

// Generate a random freelancer every 2 seconds
setInterval(function() {
    var randomFreelancer = generateRandomFreelancer();
    freelancers.push(randomFreelancer);
    renderFreelancers();
    updateDisplayedMessage();
}, 2000); 
