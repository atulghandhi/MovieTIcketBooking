//select container of screen and all seats in diagram
const container = document.querySelector('.container');

//select all elements with .row class and .seat class and not .occupied class
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');

//select all elements with a .selected class
let selectedSeats = document.querySelectorAll('.row .selected');

//select number of seats selected and price of seats
const count = document.getElementById('count');
const total = document.getElementById('total');

//select drop down list of movies
const movieSelect = document.getElementById('movies');

//select value attribute of movie selected. Adding the '+' in front turns variable into an int.
let ticketPrice;

//call function to add data from local storage if applicable
populateUI();

function updateSelectedCount(){
    selectedSeats = document.querySelectorAll('.row .selected');

    //save and index of all seats selected from the container of all available seats
    const seatsIndex = [...selectedSeats].map( seat => [...availableSeats].indexOf(seat));
    localStorage.setItem('seats', JSON.stringify(seatsIndex));

    count.textContent = `${selectedSeats.length}`;
    total.textContent = `${selectedSeats.length*ticketPrice}`;
}

function saveMovieSelected(ticket, movie) {
    localStorage.setItem('movie', movie);
    localStorage.setItem('ticket', ticket);
}

//Seat select event
container.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains('seat') && !target.classList.contains('occupied')){
        target.classList.toggle('selected');
        updateSelectedCount();
    }
});

//Drop down Movie change event
movieSelect.addEventListener('change', e => {
    const target = e.target;
    ticketPrice = +target.value;

    saveMovieSelected(ticketPrice, target.selectedIndex);
    updateSelectedCount();
})


function populateUI() {
    const seats = JSON.parse(localStorage.getItem('seats'))
    const movie = localStorage.getItem('movie')
    const ticket = localStorage.getItem('ticket')

    if(seats !== null && seats.length>0) {
        for(const seat of seats) {
            availableSeats.item(seat).classList.add('selected');
        }
    }

    movieSelect.selectedIndex = movie;
    ticketPrice = +movieSelect.value;
    updateSelectedCount();
}













