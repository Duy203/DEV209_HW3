document.getElementById('newUserButton').addEventListener('click', function() {
    document.getElementById('selectuser').disabled = true;
    document.getElementById('newuser').disabled = false;
    //scroll the page down to the new user create
    let Section2 = document.getElementById('section2');
    Section2.scrollIntoView({behavior:'smooth' });
});

document.getElementById('currentUserButton').addEventListener('click', function() {
    document.getElementById('selectuser').disabled = true;
    document.getElementById('currentuser').disabled = false;
    //scroll the page down to the current user log in 
    let Section3 = document.getElementById('section3');
    Section3.scrollIntoView({behavior:'smooth' });
});

document.getElementById('loginButton').addEventListener('click', UserLogIn);



function createUser() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var newCity = document.getElementById('newCity').value;
    var newState = document.getElementById('newState').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    localStorage.setItem('newCity', newCity);
    localStorage.setItem('newState', newState);

    let message = document.getElementById('message');
    message.innerHTML = "Welcome " + newUsername + ", Here are your account infomation.";

    let usernameDisplay = document.getElementById('usernamedisplay');
    usernameDisplay.innerHTML = "User Name: "+ newUsername;

    let cityDisplay = document.getElementById('citydisplay');
    cityDisplay.innerHTML = "City: " + newCity;

    let stateDisplay = document.getElementById('statedisplay');
    stateDisplay.innerHTML = "State: "+ newState;

    let Display = document.getElementById('display');
    Display.scrollIntoView({ behavior : 'smooth'});
}

function UserLogIn() {
    var existingUsername = document.getElementById('existingUsername').value;
    var existingPassword = document.getElementById('existingPassword').value;

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
    let message = document.getElementById('message');
    
    if (existingUsername === storedUsername && existingPassword === storedPassword) {
        alert("Welcome back " + existingUsername);
        message.innerHTML = "Welcome back " + existingUsername;
        let Display = document.getElementById('display');
        Display.scrollIntoView({ behavior : 'smooth'});
    } else {
        alert("Invalid");
        message.innerHTML = "invalid";
    }
}
