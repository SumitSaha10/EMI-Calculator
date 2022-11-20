window.addEventListener("load", function () {

    let payMonth = document.getElementById("payMonth");
    let totalAmount = document.getElementById("totalAmount");
    let btn = document.getElementById("btn");
    let reset = document.getElementById("reset");

    //Function for calculati EngMI
    function calculate() {
        let amount = parseInt(document.getElementById("amount").value);
        let month = parseInt(document.getElementById("month").value);
        let interest = parseFloat(document.getElementById("interest").value);
        console.log("clicked")
        let pay = (amount / month) + (((amount / month) * interest) / 100);
        payMonth.value = pay;
        let totalAmo = pay * month;
        totalAmount.value = totalAmo;
    }

    //Function for reset
    function resetInput() {
        let input = document.getElementsByTagName("input");
        Array.from(input).forEach(element => {
            element.value= "";
        });
    }

    btn.addEventListener("click", calculate);
    reset.addEventListener("click",resetInput);
})