function weightToPound() {
    var wgt = document.getElementById('weight').value;
    wgt = (wgt * (2.2046)).toFixed(2);


    document.getElementById('result').innerHTML = wgt;

}