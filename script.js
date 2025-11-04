const nameInput = document.getElementById('movieName');
const ratingInput = document.getElementById('movieRating');
const answer = document.getElementById('answer');
const form = document.getElementById('ratingForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const movieName = nameInput.value;
    const rating = ratingInput.value;
    let message;

    switch (rating) {
        case "5":
            message = "Excellent 😎";
            break;

        case "4":
            message = "Very Good 🙂";
            break;

        case "3":
            message = "Good 😐";
            break;

        case "2":
            message = "Poor 🙁";
            break;

        case "1":
            message = "Terrible 😡";
            break;

        default:
            message = "Please select a rating between 1 and 5.";
    }

if (movieName) {
    answer.textContent = `${movieName} is rated as: ${message}`;
} else {
    answer.textContent = `The movie is rated as: ${message}`;
}

});