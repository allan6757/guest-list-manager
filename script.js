// get form and list elements
const form = document.getElementById('guest-form');
const guestInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

let guests = []; // store guest names

form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page from refreshing
    console.log('Form submitted');

    const name = guestInput.value.trim();
    console.log('Input name:', name);

    // check if guest list has less than 10
    if (guests.length < 10) {
        addGuest(name);
        guestInput.value = ''; // clear input
    } else {
        alert('Guest limit reached (10 people max).');
        console.log('Guest limit reached');
    }
});

// function to add a guest
function addGuest(name) {
    if (name === '') {
        console.log('Empty name, not adding guest');
        return; // don't add empty names
    }

    guests.push(name); // add to array
    console.log('Guests array after adding:', guests);

    const li = document.createElement('li');
    li.textContent = name;

    // create RSVP toggle
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.addEventListener('click', () => {
        rsvpBtn.textContent = rsvpBtn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
        console.log(`RSVP toggled for ${name}:`, rsvpBtn.textContent);
    });
    
    // create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        guestList.removeChild(li); // remove from list
        guests = guests.filter(g => g !== name); // update array
        console.log(`Removed ${name}. Guests array after removal:`, guests);
    });

    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    guestList.appendChild(li);
    console.log(`Added guest "${name}" to the DOM`);
}