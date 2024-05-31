var weight = document.getElementById("weight")
var height = document.getElementById("height")
var Result = document.getElementById("result");
var ResultStatu = document.getElementById("result-statu");
var BMI = document.getElementById("bmi-calculater");

BMI.addEventListener('keyup', function (e) {

    if (e.keyCode == 13) {
        CalculateBMI()
    }
})

function CalculateBMI() {


    var result = weight.value / Math.pow(height.value, 2);
    Result.innerText = result.toFixed(2);



    if (result <= 18.5) {
        ResultStatu.innerText = "Under Weight"
        ResultStatu.style.color = "#2196f3"
    } else if (result >= 18.5 && result < 25) {
        ResultStatu.innerText = "Normal"
        ResultStatu.style.color = "#45a349"
    } else if (result >= 25 && result < 30) {
        ResultStatu.innerText = "Over Weight"
        ResultStatu.style.color = "#e3b21d"
    } else if (result >= 30) {
        ResultStatu.innerText = "Obese"
        ResultStatu.style.color = "#df1717"
    }




}

function reset() {
    weight.value = "";
    height.value = "";
    Result.innerText = "";
    ResultStatu.innerText = "";

}




