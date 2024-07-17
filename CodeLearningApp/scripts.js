const codes = {
    "4676" : "червен домат",
    "4655" : "пъпеш - деликатесен",
    "4166" : "сливи",
    "4911" : "домат - Розова магия"
};

var code;
var t;

var randomProperty = function (codes) {
    var keys = Object.keys(codes);
    return codes[keys[ keys.length * Math.random() << 0]];
};

window.onload = function() {
    var types =Object.keys(codes);
    var rn = Math.floor(Math.random() * (types.length));
    t = types[rn];
    document.getElementById('t').innerHTML = codes[t];
};

function Add0() {
    document.getElementById('txt').value += 0;
}

function Add1() {
    document.getElementById('txt').value += 1;
}

function Add2() {
    document.getElementById('txt').value += 2;
}

function Add3() {
    document.getElementById('txt').value += 3;
}

function Add4() {
    document.getElementById('txt').value += 4;
}

function Add5() {
    document.getElementById('txt').value += 5;
}

function Add6() {
    document.getElementById('txt').value += 6;
}

function Add7() {
    document.getElementById('txt').value += 7;
}

function Add8() {
    document.getElementById('txt').value += 8;
}

function Add9() {
    document.getElementById('txt').value += 9;
}

function PLU()
{
    var code = document.getElementById('txt').value;

    if (code == t) {
        window.confirm("Браво!");
        location.reload();
    }
    else
    {
        window.confirm("Грешно!");
    }
}