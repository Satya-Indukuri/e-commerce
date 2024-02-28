// Function to load and inject header and footer
function loadHeaderAndFooter() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
}

// Function to initialize toggleMenu after header is loaded
function toggleMenu() {
    var secondCol = document.querySelector('.secondcol');
    var thirdCol = document.querySelector('.thirdcol');
    console.log("clicked");
    if (secondCol.style.display === "block") {
        secondCol.style.display = "none";
        thirdCol.style.display = "none";
    } else {
        secondCol.style.display = "block";
        thirdCol.style.display = "block";
    }
}


// Call the function to load header and footer
loadHeaderAndFooter();