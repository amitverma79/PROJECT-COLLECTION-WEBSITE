document.getElementById('submit').addEventListener("click", calculate);

function calculate() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    h = h * h;
    var result;
    result = ((w * 10000) / h).toFixed(2);
    result = result.toString();
    document.getElementById('result').innerHTML = "result = " + result;
}