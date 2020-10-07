//select container of screen and all seats in diagram
const container = document.querySelector('.container');
//select all the seats in the rows (not in the colour key) that are not occupied (don't have 'occupied' class)
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
//select price and number of seats selected text snippets so they can be changed
const count = document.getElementById('count');
const total = document.getElementById('total');
//select list of movies that can be selected
const movieSelect = document.getElementById('movies');
//select value attribute of ticket selected. Adding the '+' in front turns variable into an int.
const ticketPrice = +movieSelect.value;

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        count.textContent = 'the worst';
    }
});