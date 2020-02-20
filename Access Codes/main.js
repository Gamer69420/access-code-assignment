document.getElementById('page1').addEventListener('click', AccessFirstPage);

function AccessFirstPage() {
    let One = document.getElementById('1stCode').value;
    let Two = document.getElementById('2ndCode').value;
    let Three = document.getElementById('3rdCode').value;

    if (One == 1 && Two == 2 && Three == 3) {
        document.getElementById('results').innerHTML = 'ACCESS GRANTED';
    } else {
        document.getElementById('results').innerHTML = 'ACCESS DENIED';
    }
}

document.getElementById('page2').addEventListener('click', AccessSecondPage);

function AccessSecondPage() {
    let One = document.getElementById('1stCode').value;
    let Two = document.getElementById('2ndCode').value;
    let Three = document.getElementById('3rdCode').value;

    if (One == 'WOW' && Two <= 60 && Two >= 50) {
        document.getElementById('results').innerHTML = 'ACCESS GRANTED';
    } else {
        document.getElementById('results').innerHTML = 'ACCESS DENIED';
    }
}

document.getElementById('page3').addEventListener('click', AccessThirdPage);

function AccessThirdPage() {
    let One = document.getElementById('1stCode').value;
    let Two = document.getElementById('2ndCode').value;
    let Three = document.getElementById('3rdCode').value;

    if (One == Two || Three == 'LET ME IN') {
        document.getElementById('results').innerHTML = 'ACCESS GRANTED';
    } else {
        document.getElementById('results').innerHTML = 'ACCESS DENIED';
    }
}

document.getElementById('page4').addEventListener('click', AccessFourthPage);

function AccessFourthPage() {
    let One = document.getElementById('1stCode').value;
    let Two = document.getElementById('2ndCode').value;
    let Three = document.getElementById('3rdCode').value;

    if (One == 'ALGORITHM' || Two == 'ALGORITHM' || Three == 'ALGORITHM') {
        document.getElementById('results').innerHTML = 'ACCESS GRANTED';
    } else {
        document.getElementById('results').innerHTML = 'ACCESS DENIED';
    }
}