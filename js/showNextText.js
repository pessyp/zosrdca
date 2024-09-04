var $test;
function showNextText(e) {
    var fieldNameElement = document.getElementById('visible');
    var curr = parseInt(fieldNameElement.innerHTML.valueOf());
    var next = addNumbers(curr, e);
    fieldNameElement.innerHTML = next;
    var maxColElement = document.getElementById('maxcol');
    var mxcol = parseInt(maxColElement.innerHTML.valueOf());

    if (next > 1) {
        document.getElementById("lbtn").style.visibility = "visible";
    } else {
        document.getElementById("lbtn").style.visibility = "hidden";
    }

    if (next >= mxcol) {
        document.getElementById("rbtn").style.visibility = "hidden";
    } else {
        document.getElementById("rbtn").style.visibility = "visible";
    }

    if (next > 0) {
        if (document.getElementById('Div' + curr)) {

            if (document.getElementById('Div' + curr).style.display === 'none') {
                document.getElementById('Div' + curr).style.display = 'block';
                document.getElementById('Div' + next).style.display = 'none';
            } else {
                document.getElementById('Div' + curr).style.display = 'none';
                document.getElementById('Div' + next).style.display = 'block';
            }
        }
    }
}
function addNumbers(num1, num2) {
    return num1 + num2;
}



