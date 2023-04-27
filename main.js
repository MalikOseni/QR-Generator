// Selecting elements from the DOM using their IDs and assigning them values
const UrlEl = document.getElementById('url-info');
const containerEl = document.getElementById('container')
const btnEl = document.getElementById('btn');
const imgResultEl = document.getElementById('code-result');

// Defining a function to update the QR code
const updateQR = () => {
    // Getting the URL entered by the user
    let qrValue = UrlEl.value;
    // If there is no value, display an alert message and exit the function
    if (!qrValue)  return alert('Enter Url');
    // Updating the text of the button to show that the code is being generated
    btnEl.innerHTML = "Generating QR Code...";
    // Setting the source of the image to the API call that generates the QR code using the user input
    imgResultEl.src = ` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // Adding an event listener to the image element that executes when the image loads
    imgResultEl.addEventListener('load', () => {
        // Adding a class to the container element to show the active state
        containerEl.classList.add('active');
        // Updating the text of the button after QR code has been generated
        btnEl.innerText = 'Generate QR Code';
    });
};

// Adding an event listener to the button element that calls the updateQR() function when clicked
btnEl.addEventListener('click',updateQR)

// Adding an event listener to the URL input field that executes when a key is released
UrlEl.addEventListener('keyup', () => {
    // Checking if there is any value in the URL input field, and removing the active class from the container element if not
    if (!UrlEl.value) {
        containerEl.classList.remove('active');
    }
})
