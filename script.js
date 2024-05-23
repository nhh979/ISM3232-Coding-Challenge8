// Hoang Nguyen
// U12840485

const numOfMealPref = 6;

document.getElementById('registrationForm').addEventListener('submit', event => {
    event.preventDefault();

    // get name, email, event date
    const name = document.getElementById('registrantName').value;
    const email = document.getElementById('registrantEmail').value;
    const date = document.getElementById('eventDate').value;

    // Get meal preference
    let mealPrefList = [];                       // Initiate an empty array
    for (let i = 1; i <= numOfMealPref; i++){
        let mealPref = document.getElementById(`mealPreference${i}`);    // Grab an HTML checkbox
        if (mealPref.checked){                                          // Check if it is checked
            mealPrefList.push(mealPref.value.trim())         // If so, append the check box's values to the array
        } 
    }
    // Concatenate all values to in the array if it's not empty to make a string of meal preference
    const mealPrefStr = (mealPrefList) ? mealPrefList.join(', ') : "";  

    // If any field is empty, display an alert
    if (name === "" || email === "" || date === "" || mealPrefStr === ""){
        alert("Please fill out all fields.");
        return;
    }

     // Display the registration form when all fields are filled out. 
     document.getElementById("registrationSummary").innerHTML = `
     <h1> Registration Summary </h1>
     <p><strong>Name: </strong> ${name}</p>
     <p><strong>Email: </strong> ${email}</p>
     <p><strong>Date: </strong> ${date}</p>
     <p><strong>Meal Preference: </strong> ${mealPrefStr}</p>`

})