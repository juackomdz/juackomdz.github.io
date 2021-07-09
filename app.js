function sortearAct()
{
    const numeros = [];
    while(numeros.length<5)
    {
        var existe = false;
        var rnd=Math.floor(Math.random()*30)+1;
        for(var i=0;i<numeros.length;i++)
        {
            if(numeros[i]==rnd)
            {
                existe=true;
                break;
            }
        }
        if(!existe)
        {
            numeros.push(rnd);
        }
    }
    numeros.sort(function(a, b){return a - b});
    document.getElementById("sorteo").value=numeros.join("-");
}
//select numero 1
select = document.getElementById("sel");
for(i=1; i<31; i++){
    option=document.createElement("option");
    option.value=i;
    option.text=i;
    select.appendChild(option);
}
//select numero 2
select = document.getElementById("sel2");
for(i=1; i<31; i++){
    option=document.createElement("option");
    option.value=i;
    option.text=i;
    select.appendChild(option);
}
//select numero 3
select = document.getElementById("sel3");
for(i=1; i<31; i++){
    option=document.createElement("option");
    option.value=i;
    option.text=i;
    select.appendChild(option);
}
//select numero 4
select = document.getElementById("sel4");
for(i=1; i<31; i++){
    option=document.createElement("option");
    option.value=i;
    option.text=i;
    select.appendChild(option);
}
//select numero 5
select = document.getElementById("sel5");
for(i=1; i<31; i++){
    option=document.createElement("option");
    option.value=i;
    option.text=i;
    select.appendChild(option);
}
// let texto="";
// for(let i=1; i<31; i++){
//     texto+=i + "<br>";
// } 
// document.getElementById("sel").options[texto].value;