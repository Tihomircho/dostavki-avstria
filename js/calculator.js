function calculate() {
    let n1 = parseFloat($('#n1').val());
    let n2 = parseFloat($('#n2').val());
    let n3 =parseFloat($('#n3').val());
    let n4 =parseFloat(6000);
    $('#result').html(((n1*n2*n3)/n4).toFixed(2));
}