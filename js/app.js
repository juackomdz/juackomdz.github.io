//select numero 1
select = document.getElementById("sel");
for (i = 1; i < 31; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}
//select numero 2
select = document.getElementById("sel2");
for (i = 1; i < 31; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}
//select numero 3
select = document.getElementById("sel3");
for (i = 1; i < 31; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}
//select numero 4
select = document.getElementById("sel4");
for (i = 1; i < 31; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}
//select numero 5
select = document.getElementById("sel5");
for (i = 1; i < 31; i++) {
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}

function sortearAct() {
    const numeros = [];
    var seleccion = document.getElementById("sel").selectedIndex;
    var seleccion2 = document.getElementById("sel2").selectedIndex;
    var seleccion3 = document.getElementById("sel3").selectedIndex;
    var seleccion4 = document.getElementById("sel4").selectedIndex;
    var seleccion5 = document.getElementById("sel5").selectedIndex;
    let cont = 0;
    if (seleccion == 0 || seleccion2 == 0 || seleccion3 == 0 || seleccion4 == 0 || seleccion5 == 0) {
        alert("Ingrese un valor");
    } else {
        while (numeros.length < 5) {
            var existe = false;
            var rnd = Math.floor(Math.random() * 30) + 1;
            for (var i = 0; i < numeros.length; i++) {
                if (numeros[i] == rnd) {
                    existe = true;
                    break;
                }
            }
            if (!existe) {
                numeros.push(rnd);
            }
        }
        numeros.sort(function (a, b) { return a - b });
        document.getElementById("sorteo").value = numeros.join("-");

        for (var i = 0; i < numeros.length; i++) {

            if (seleccion == numeros[i]) {
                cont = cont + 1;
            }
            if(seleccion2 == numeros[i])
            {
                cont = cont + 1;
            }
            if(seleccion3 == numeros[i])
            {
                cont = cont + 1;
            }
            if(seleccion4 == numeros[i])
            {
                cont = cont + 1;
            }
            if(seleccion5 == numeros[i])
            {
                cont = cont + 1;
            }
        }
        document.getElementById("conteo").innerHTML = "Tienes " + cont + " aciertos";
    }
}

var typed = new Typed("#typed", {
    stringsElement: "#typedjs",
    typeSpeed: 10,
    backSpeed: 0,
    backDelay: 800,
    startDelay: 100,
    loop: false,
    fadeOut: true,
    fadeOutDelay: 100
});


