// get form and list elements
const form = document.getElementById('guest-form');
const guestInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

let guests = []; // store guest names

form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page from refreshing

    const name = guestInput.value.trim();

    // check if guest list has less than 10
    if (guests.length < 10) {
        addGuest(name);
        guestInput.value = ''; // clear input
    } else {
        alert('Guest limit reached (10 people max).');
    }
});

// function to add a guest
function addGuest(name) {
    if (name === '') return; // don't add empty names

    guests.push(name); // add to array

    const li = document.createElement('li');
    li.textContent = name;

    // create RSVP toggle
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.addEventListener('click', () => {
        rsvpBtn.textContent = rsvpBtn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
    });
    // create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        guestList.removeChild(li); // remove from list
        guests = guests.filter(g => g !== name); // update array
    });

    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);
}