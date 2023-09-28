var colores = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
var indiceColor = 0;

document.getElementById('cambiarColor').addEventListener('click', function() {
    document.body.style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
});
