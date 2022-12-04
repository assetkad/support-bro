
function calculateInvestment() {
    let investAmt = document.getElementById("investamt").value;
    let investYr = document.getElementById("investyr").value;
    let interestRate = document.getElementById("investyr2").value;

    //validate input
    if (investAmt === "" || investYr == 0 || interestRate == 0) {
        alert("Пожалуйста введите данные");
        return;
    }

    //check to see if this input is empty or less than or equal to 1
    if (interestRate === "" || interestRate <= 1) {
        interestRate = 1;
        document.getElementById("yieldamount").style.display = "block";
    } else {
        document.getElementById("yieldamount").style.display = "block";
    }

    //calculate tip
    let total = [investAmt * (interestRate / 100) * investYr];

    let grandTotal = parseFloat(total) + parseFloat(investAmt);

    //round to two decimal places
    grandTotal = Math.round(grandTotal * 100) / 100;

    //next line allows us to always have two digits after decimal point
    grandTotal = grandTotal.toFixed(2);

    //display the tip
    document.getElementById("investyield").style.display = "block";
    document.getElementById("yield").innerHTML = grandTotal;

    if (investYr == 1) {
        document.getElementById("yieldamount").innerHTML = `${username.value} заработает за ${investYr} год`
    } else if (investYr < 5 && investYr > 1) {
        document.getElementById("yieldamount").innerHTML = `${username.value} заработает за ${investYr} года`
    } else if (investYr >= 5) {
        document.getElementById("yieldamount").innerHTML = `${username.value} заработает за ${investYr} лет`
    }

}

//hide the tip amount on load
document.getElementById("investyield").style.display = "none";
document.getElementById("yieldamount").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateInvestment();
};
