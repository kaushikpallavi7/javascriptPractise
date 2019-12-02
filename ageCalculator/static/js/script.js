//Challenge 1: your age in days

function ageInDays(){
    let birthYear = document.getElementById("age-input").value;
    let date = new Date();
    let calculateAgeInDays = (date.getFullYear() - birthYear) * 365;
    document.getElementById("flex-box-result").innerText = `You are ${calculateAgeInDays} days old`;
}

function resetAge(){
    document.getElementById("flex-box-result").innerText = "";
}