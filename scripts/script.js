var nombre;
nombre = prompt('Dime tu nombre ', '');
alert("Saludos " + nombre + ", lee las instrucciones de la página");

function meses ()
{
    var meses = ["enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto",  "septiembre", "octubre",
    "noviembre", "diciembre"];
    var i;

    for(i=0;i<=11;i++)
    {
        document.write('<br>');
        document.write("Mes " + (i+1) + ": "+meses[i]);
    }
    document.write('<br>');
    document.write('<br>');
    document.write("Para volver a iniciar las funciones recarga la página");
}

function tablaMulti (numero)
{
    var j;

    for(j=1;j<=10; j++)
    {
        document.write('<br>');
        document.write(numero + " x " + j + " = "+ numero*j);
    }
    document.write('<br>');
    document.write('<br>');
    document.write("Para volver a iniciar las funciones recarga la página");
}

function dias ()
{
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado", "Domingo"];
    var k;

    for(k=0; k<=6; k++)
    {
        document.write('<br>');
        document.write("Día " + (k+1) + ": " + dias[k]);
    }

    document.write('<br>');
    document.write('<br>');
    document.write("Para volver a iniciar las funciones recarga la página");
}
