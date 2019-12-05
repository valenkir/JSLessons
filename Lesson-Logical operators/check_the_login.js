let login = prompt("Who's there?");
let password;

if (login == "Admin"){
    password = prompt("Enter the password");
    if (password == "TheMaster"){
        alert("Welcome!")
    } else if (password == '' || password == null){
        alert("Cancelled!");
    } else {
        alert ("Wront password!");
    }
} else if (login == '' || login == null){
    alert("Cancelled!");
} else {
    alert("I don't know you!");
}
