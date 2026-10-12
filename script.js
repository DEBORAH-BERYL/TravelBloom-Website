const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");
const recommendations = document.getElementById("recommendations");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim().toLowerCase();

    searchResult.textContent = "";
    recommendations.innerHTML = "";

    if (searchText === "") {
        searchResult.textContent = "Please enter a destination or category to search.";
    } 
    else if (searchText.includes("beach")) {
        searchResult.textContent = "Here are two beautiful beaches!";
        recommendations.innerHTML = "<h2>Beautiful Beaches</h2>" +
            "<img src=\"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=500&q=80\" alt=\"Beach 1\">" +
            "<img src=\"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80\" alt=\"Beach 2\">";
    } 
    else if (searchText.includes("temple")) {
        searchResult.textContent = "Here are two historic temples!";
        recommendations.innerHTML = "<h2>Historic Temples</h2>" +
            "<img src=\"https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80\" alt=\"Temple 1\">" +
            "<img src=\"https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=500&q=80\" alt=\"Temple 2\">";
    } 
    else if (searchText.includes("country") || searchText.includes("japan")) {
        searchResult.textContent = "Explore these beautiful destinations!";
        recommendations.innerHTML = "<h2>Explore Countries</h2>" +
            "<img src=\"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80\" alt=\"Country 1\">" +
            "<img src=\"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=500&q=80\" alt=\"Country 2\">";
    } 
    else {
        searchResult.textContent = "No recommendations found. Try beach, temple, country, or Japan.";
        recommendations.innerHTML = "";
    }
});
