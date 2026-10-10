console.log("TravelBloom is working!");

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const recommendations = document.getElementById("recommendations");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim().toLowerCase();

    recommendations.innerHTML="";

    console.log(searchText);

    if (searchText === "") {
        searchResult.textContent = "Please enter a destination or category to search.";
    }
    else if (searchText === "japan") {
        searchResult.textContent = "Japan is a beautiful destination known for its rich culture, delicious food, and stunning landscapes.";

    recommendations.innerHTML= "<h2>Explore Japan</h2><p>Discover Japan's rich culture, delicious food, and beautiful scenery.</p>";
    }   
    else if (searchText === "beach") {
        searchResult.textContent = "Relax on beautiful beaches, enjoy the sunshine, and experience unforgettable coastal adventures.";
    }
    else {
        searchResult.textContent = "Sorry, no recommendations found. Try searching for Japan or beach.";
    }
});

const bookNowButton = document.getElementById("bookNowButton");

bookNowButton.addEventListener("click",function(){
    alert("Thank you for your interest! Booking information will be available soon");
});

constsubmitButton=document.getElementById("submitButton");
const formMessage = document.getElementById("formMessage");

if (submitButton){
    submitButton.addEventListener("click",function(){
        formMessage.textContent="Thank you for contacting us!Your message has been received.";
    });
}