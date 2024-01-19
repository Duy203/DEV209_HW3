document.getElementById('newUserButton').addEventListener('click', function() {
    document.getElementById('selectuser').disabled = true;
    document.getElementById('newuser').disabled = false;
});

document.getElementById('currentUserButton').addEventListener('click', function() {
    document.getElementById('selectuser').disabled = true;
    document.getElementById('currentuser').disabled = false;
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
    } else {
        alert("Invalid");
        message.innerHTML = "invalid";
    }
}
