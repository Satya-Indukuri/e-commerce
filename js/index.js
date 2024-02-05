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

// Call the function to load header and footer
loadHeaderAndFooter();