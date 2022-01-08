//leap year
//a year occuring once every four years

var year = document.querySelector("#year");
var button = document.querySelector("button");
var output = document.querySelector("#output");
var Name = document.querySelector("#nameValue");

function failureMessageColor() {
    document.getElementById("output").style.color = "red";
}

function successMessageColor() {
    document.getElementById("output").style.color = "green";
}

function IsLeapYear() {
    var nameValue = Name.value;
    if (nameValue !== '') { //if name is not empty
        var value = year.value;
        //checks for anything other than number
        var regex = /[^0-9]+/

        if (value.length > 3 && value.length < 5 && regex.test(value) !== true) {
            if (value % 4 === 0 && value % 100 !== 0 || value % 400 === 0) {
                output.innerHTML = "Congratulations, It is a Leap Year!!!!!";
                successMessageColor();
            }
            else {
                output.innerHTML = "Oops! It's not a leap year";
                failureMessageColor();
            }
        }
        else {
            output.innerHTML = "Please enter your birth year in the mentioned format";
            failureMessageColor();
        }
    }

    else { //if name is empty
        output.innerHTML = "Enter the name please";
        failureMessageColor();
    }
}
button.addEventListener("click", IsLeapYear);